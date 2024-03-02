import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import "./interview.css";
import x1 from "../src/images/logo.jpg";
import SpeechToText from "./SpeechToText";

const Interview = () => {
  const [pageLoaded, setPageLoaded] = useState(false);
  const [chatHistory, setChatHistory] = useState([]);
  const [audioURL, setAudioURL] = useState("");
  const [loading, setLoading] = useState(false);
  const [responseCount, setResponseCount] = useState(0);
  const [interviewStarted, setInterviewStarted] = useState(false);
  const [cameraAccess, setCameraAccess] = useState(false);
  const [buttonVisible, setButtonVisible] = useState(true);
  const [finalResponseEnded, setFinalResponseEnded] = useState(false);
  const [showGenerateReportButton, setShowGenerateReportButton] =
    useState(false);
  const [isBackendAudioPlaying, setIsBackendAudioPlaying] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [finalText, setFinalText] = useState("");
  const [renderSpeechToText, setRenderSpeechToText] = useState(false);
  const [valid, setValid] = useState(false);
  const [isRecordingSaved, setIsRecordingSaved] = useState(false);
  const history = useHistory();

  const { transcript, resetTranscript, listening } = useSpeechRecognition();

  useEffect(() => {
    const requestCameraAccess = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: true,
        });
        setCameraAccess(true);
        const videoElement = document.getElementById("cameraElement");
        if (videoElement) {
          videoElement.srcObject = stream;
        }
      } catch (error) {
        console.error("Error accessing camera:", error);
      }
    };

    requestCameraAccess();
  }, []);

  useEffect(() => {
    if (finalResponseEnded && !listening) {
      setRenderSpeechToText(true);
    }
  }, [finalResponseEnded, listening]);

  useEffect(() => {
    if (renderSpeechToText && !isBackendAudioPlaying) {
      setValid((prevValid) => {
        console.log("The vhvfhgshfgh", !prevValid);
        return !prevValid;
      });
    }
  }, [renderSpeechToText, isBackendAudioPlaying]);
  useEffect(() => {
    console.log("The state", isRecordingSaved);
    if (isRecordingSaved) {
      setTimeout(() => {
        handleEndInterview();
      }, 3000);
    }
  }, [isRecordingSaved]);

  const handleStartInterview = async () => {
    try {
      const apiEndpoint = "http://3.110.131.163:5000/generate_messages";

      const response = await fetch(apiEndpoint, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${sessionStorage.getItem("access-token")}`,
        },
      });

      if (!response.ok) {
        throw new Error("Failed to start interview");
      }

      const result = await response.json();
      console.log(result);

      setButtonVisible(false);
      setInterviewStarted(true);

      const helloMessage = new SpeechSynthesisUtterance(
        "Hello! Welcome to the interview. Your interview is going to start now. Please introduce yourself."
      );
      helloMessage.onend = () => {
        setIsBackendAudioPlaying(false);
        SpeechRecognition.startListening({ continuous: true });
        resetTranscript();
      };

      window.speechSynthesis.speak(helloMessage);
    } catch (error) {
      console.error(error);
    }
  };

  const handleRecordingSaved = (value) => {
    console.log("Recording saved:", value);
    setIsRecordingSaved(value);
  };

  const handleSendMessage = async () => {
    try {
      setChatHistory([]);
      setAudioURL("");
      setLoading(true);

      const response = await fetch("http://3.110.131.163:5000/receive_text", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${sessionStorage.getItem("access-token")}`,
        },
        body: JSON.stringify({ text: transcript }),
      });

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      const audioBlob = await response.blob();
      const audioObjectURL = URL.createObjectURL(audioBlob);

      setChatHistory((prevHistory) => [
        ...prevHistory,
        { role: "user", content: transcript },
        { role: "assistant", content: audioObjectURL },
      ]);

      setAudioURL(audioObjectURL);
      resetTranscript();

      setResponseCount((prevCount) => prevCount + 1);

      const audioElement = document.getElementById("audioWElement");
      if (audioElement) {
        audioElement.onended = () => {
          setIsBackendAudioPlaying(false);
          if (interviewStarted && responseCount < 5) {
            SpeechRecognition.startListening({ continuous: true });
          } else if (responseCount === 5) {
            setInterviewStarted(false);
            handleEndInterview();
          }
        };
      }

      setIsBackendAudioPlaying(true);

      if (interviewStarted && responseCount < 5) {
        SpeechRecognition.stopListening();
      } else if (responseCount === 5) {
        SpeechRecognition.stopListening();
        setInterviewStarted(false);
        handleEndInterview(); // Call handleEndInterview when responseCount reaches 2
      }
    } catch (error) {
      console.error("Error sending message:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleEndInterview = () => {
    SpeechRecognition.stopListening();

    const thankYouMessage = new SpeechSynthesisUtterance(
      "Thank you for the interview. Please check your report after this to review your performance."
    );

    thankYouMessage.onend = () => {
      setFinalResponseEnded(true);
      setIsBackendAudioPlaying(false);
      setShowGenerateReportButton(true);
    };

    window.speechSynthesis.speak(thankYouMessage);
  };
  ///////////////////////////////////////////////////////////
  const handleGenerateReport = () => {
    console.log("Generating report...");
    history.push("/GenReport");
    // Replace with your report generation logic
  };
  ////////////////////////////////////////////////////////////
  const handleAudioEnded = () => {
    if (interviewStarted && responseCount < 5) {
      SpeechRecognition.startListening({ continuous: true });
    } else if (responseCount === 5) {
      if (!listening) {
        setFinalResponseEnded(true);
      }
    }
    setIsBackendAudioPlaying(false);
  };

  useEffect(() => {
    let timeout;

    if (listening && transcript.trim() !== "") {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        SpeechRecognition.stopListening();
        handleSendMessage();
      }, 2000);
    }

    return () => {
      clearTimeout(timeout);
    };
  }, [listening, transcript, responseCount, handleSendMessage]);

  return (
    <>
      <div
        className={
          buttonVisible
            ? `interview-page ${pageLoaded ? "loaded" : ""}`
            : "interview-page2"
        }
      >
        <div>
          {cameraAccess && (
            <video
              autoPlay
              muted
              playsInline
              id="cameraElement"
              className="webcam-video"
            ></video>
          )}
          <div className="image-container">
            <img src={x1} alt="Interviewee" className="interviewee-image" />
          </div>

          <div style={{ display: "none" }}>
            {chatHistory.map((message, index) => (
              <div key={index} className={message.role}>
                {message.content}
              </div>
            ))}
          </div>
        </div>
        {loading && <div style={{ display: "none" }}>Loading...</div>}
        {audioURL && (
          <audio
            id="audioElement"
            autoPlay
            controls
            onEnded={handleAudioEnded}
            style={{ display: "none" }}
          >
            <source src={audioURL} type={`audio/${audioURL.split("/")[1]}`} />
            <source src={audioURL} type="audio/mp3" />
            Your browser does not support the audio tag.
          </audio>
        )}
      </div>
      <div>
        {!isBackendAudioPlaying &&
          !interviewStarted &&
          !showGenerateReportButton && (
            <button
              className="audio-indicator"
              onClick={() => handleStartInterview()}
              disabled={loading || listening || interviewStarted}
            >
              Let's Go
            </button>
          )}
        {showGenerateReportButton && (
          <button
            className="audio-indicator"
            onClick={() => handleGenerateReport()}
          >
            Generate Report
          </button>
        )}
      </div>
      {valid && <SpeechToText check={true} onRecord={setIsRecordingSaved} />}
    </>
  );
};

export default Interview;

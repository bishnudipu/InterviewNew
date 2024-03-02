import React, { useState, useEffect } from "react";

const SpeechToText = (props) => {
  const [isListening, setIsListening] = useState(false);
  const [transcription, setTranscription] = useState("");
  let silenceTimer;

  useEffect(() => {
    if (props.check) {
      startListening();
    } else {
      stopListening();
    }
  }, [isListening]);

  useEffect(() => {
    if (transcription !== "") {
      handleSpeechRecognitionResult();
    }
  }, [transcription]);

  const startListening = () => {
    const recognition = new window.webkitSpeechRecognition();

    recognition.onstart = () => {
      console.log("Speech recognition started");
    };

    recognition.onresult = (event) => {
      const result = event.results[event.results.length - 1];
      const text = result[0].transcript;

      setTranscription(text);

      // Reset the silence timer on successful recognition
      clearTimeout(silenceTimer);
      silenceTimer = setTimeout(() => {
        stopListening();
      }, 3000); // 3 seconds of continuous silence
    };

    recognition.onend = () => {
      console.log("Speech recognition ended");
      setIsListening(false);
      recognition.stop();
    };

    recognition.onaudioend = () => {
      // This event is triggered when there's a pause in audio
      console.log("Audio ended (pause in speech)");
      stopListening();
    };

    recognition.onaudiostart = () => {
      // This event is triggered when audio processing starts
      console.log("Audio started (speech detected)");
    };

    recognition.start();
  };

  const stopListening = () => {
    console.log("Stopping speech recognition");
    clearTimeout(silenceTimer);
  };

  const handleSpeechRecognitionResult = () => {
    fetch("http://3.110.131.163:5000/receive_final_text", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${sessionStorage.getItem("access-token")}`,
      },
      body: JSON.stringify({
        text: transcription,
      }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        console.log(data.message);
        props.onRecord(true);
      })
      .catch((error) => {
        console.error("Error sending data to server:", error);
      });
  };

  const handleButtonClick = () => {
    setIsListening(true);
  };
};

export default SpeechToText;

import axios from "axios";
import React, { useState, useEffect } from "react";
const UserInformation = () => {
  const [project, setProject] = useState("");
  const [skills, setSkills] = useState("");
  const [certification, setCertification] = useState("");
  const [experience, setExperience] = useState("");
  const [comapny, setCompany] = useState("");
  const [jobRole, setJobRole] = useState("");
  const [jobDescription, setJobDescription] = useState("");

  const saveProject = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://3.110.131.163:5000/saveFormData",
        {
          formType: "projects",
          project,
          // Fixed user_id for temporary use
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${sessionStorage.getItem("access-token")}`,
          },
        }
      );

      console.log("Response from server:", response.data);

      if (response.status === 200) {
        console.log("Data saved successfully");
      } else {
        console.error("Failed to save data");
      }
    } catch (error) {
      console.error("Error during data save:", error);

      if (error.response) {
        console.error("Server response:", error.response.data);
      } else if (error.request) {
        console.error("No response received from the server");
      } else {
        console.error("Error setting up the request:", error.message);
      }
    }
  };
  const saveSkill = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://3.110.131.163:5000/saveFormData",
        {
          formType: "skills",
          skills,
          // Fixed user_id for temporary use
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${sessionStorage.getItem("access-token")}`,
          },
        }
      );

      console.log("Response from server:", response.data);

      if (response.status === 200) {
        console.log("Data saved successfully");
      } else {
        console.error("Failed to save data");
      }
    } catch (error) {
      console.error("Error during data save:", error);

      if (error.response) {
        console.error("Server response:", error.response.data);
      } else if (error.request) {
        console.error("No response received from the server");
      } else {
        console.error("Error setting up the request:", error.message);
      }
    }
  };
  const saveCertificate = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://3.110.131.163:5000/saveFormData",
        {
          formType: "certifications",
          certification,
          // Fixed user_id for temporary use
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${sessionStorage.getItem("access-token")}`,
          },
        }
      );

      console.log("Response from server:", response.data);

      if (response.status === 200) {
        console.log("Data saved successfully");
      } else {
        console.error("Failed to save data");
      }
    } catch (error) {
      console.error("Error during data save:", error);

      if (error.response) {
        console.error("Server response:", error.response.data);
      } else if (error.request) {
        console.error("No response received from the server");
      } else {
        console.error("Error setting up the request:", error.message);
      }
    }
  };
  const saveExperience = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://3.110.131.163:5000/saveFormData",
        {
          formType: "experience",
          experience,
          // Fixed user_id for temporary use
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${sessionStorage.getItem("access-token")}`,
          },
        }
      );

      console.log("Response from server:", response.data);

      if (response.status === 200) {
        console.log("Data saved successfully");
      } else {
        console.error("Failed to save data");
      }
    } catch (error) {
      console.error("Error during data save:", error);

      if (error.response) {
        console.error("Server response:", error.response.data);
      } else if (error.request) {
        console.error("No response received from the server");
      } else {
        console.error("Error setting up the request:", error.message);
      }
    }
  };
  const saveComapny = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://3.110.131.163:5000/saveFormData",
        {
          formType: "company_name",
          comapny,
          // Fixed user_id for temporary use
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${sessionStorage.getItem("access-token")}`,
          },
        }
      );

      console.log("Response from server:", response.data);

      if (response.status === 200) {
        console.log("Data saved successfully");
      } else {
        console.error("Failed to save data");
      }
    } catch (error) {
      console.error("Error during data save:", error);

      if (error.response) {
        console.error("Server response:", error.response.data);
      } else if (error.request) {
        console.error("No response received from the server");
      } else {
        console.error("Error setting up the request:", error.message);
      }
    }
  };
  const saveJobRole = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://3.110.131.163:5000/saveFormData",
        {
          formType: "job_role",
          jobRole,
          // Fixed user_id for temporary use
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${sessionStorage.getItem("access-token")}`,
          },
        }
      );

      console.log("Response from server:", response.data);

      if (response.status === 200) {
        console.log("Data saved successfully");
      } else {
        console.error("Failed to save data");
      }
    } catch (error) {
      console.error("Error during data save:", error);

      if (error.response) {
        console.error("Server response:", error.response.data);
      } else if (error.request) {
        console.error("No response received from the server");
      } else {
        console.error("Error setting up the request:", error.message);
      }
    }
  };
  const savejobDescription = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://3.110.131.163:5000/saveFormData",
        {
          formType: "job_description",
          jobDescription,
          // Fixed user_id for temporary use
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${sessionStorage.getItem("access-token")}`,
          },
        }
      );

      console.log("Response from server:", response.data);

      if (response.status === 200) {
        console.log("Data saved successfully");
      } else {
        console.error("Failed to save data");
      }
    } catch (error) {
      console.error("Error during data save:", error);

      if (error.response) {
        console.error("Server response:", error.response.data);
      } else if (error.request) {
        console.error("No response received from the server");
      } else {
        console.error("Error setting up the request:", error.message);
      }
    }
  };

  return (
    <div>
      <section className="bg-gray-50 dark:bg-gray-900">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                User Information
              </h1>
              <form className="space-y-4 md:space-y-6" action="#">
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Enter Your Projects
                  </label>
                  <input
                    value={project}
                    onChange={(e) => setProject(e.target.value)}
                    type="text"
                    name="projects"
                    id="projects"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Enter Your Projects "
                    required=""
                  />
                  <button
                    type="submit"
                    onClick={saveProject}
                    className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                  >
                    Save
                  </button>
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Enter Your Skills
                  </label>
                  <input
                    type="text"
                    value={skills}
                    onChange={(e) => setSkills(e.target.value)}
                    name="skills"
                    id="skills"
                    placeholder="Enter Your Skills"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required=""
                  />

                  <button
                    type="submit"
                    onClick={saveSkill}
                    className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                  >
                    Save
                  </button>
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Enter Your Certifications
                  </label>
                  <input
                    type="text"
                    name="certifications"
                    value={certification}
                    onChange={(e) => setCertification(e.target.value)}
                    id="certifications"
                    placeholder="Enter Your Certification"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required=""
                  />
                  <button
                    type="submit"
                    onClick={saveCertificate}
                    className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                  >
                    Save
                  </button>
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Describe Your Professional Experience
                  </label>
                  <input
                    type="text"
                    name="experience"
                    value={experience}
                    onChange={(e) => setExperience(e.target.value)}
                    id="experience"
                    placeholder="Describe Your Professional Experience"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required=""
                  />
                  <button
                    type="submit"
                    onClick={saveExperience}
                    className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                  >
                    Save
                  </button>
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Enter Your Company Name
                  </label>
                  <input
                    type="text"
                    name="companyName"
                    id="companyName"
                    onChange={(e) => setCompany(e.target.value)}
                    value={comapny}
                    placeholder="Enter Your Company Name"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required=""
                  />
                  <button
                    type="submit"
                    onClick={saveComapny}
                    className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                  >
                    Save
                  </button>
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Enter Your Job Role
                  </label>
                  <input
                    type="text"
                    name="jobRole"
                    id="jobRole"
                    onChange={(e) => setJobRole(e.target.value)}
                    value={jobRole}
                    placeholder="Enter Your Job Role"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required=""
                  />
                  <button
                    type="submit"
                    onClick={saveJobRole}
                    className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                  >
                    Save
                  </button>
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Enter Your Job Description
                  </label>
                  <input
                    type="text"
                    name="jobDescription"
                    onChange={(e) => setJobDescription(e.target.value)}
                    value={jobDescription}
                    id="jobDescription"
                    placeholder="Enter Your Job Description"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required=""
                  />
                  <button
                    type="submit"
                    onClick={savejobDescription}
                    className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                  >
                    Save
                  </button>
                </div>

                <button
                  type="submit"
                  onClick={() => {
                    history.push("/interview");
                  }}
                  className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  Go To Interview
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default UserInformation;

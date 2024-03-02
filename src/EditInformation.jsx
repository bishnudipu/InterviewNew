import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

const EditInformation = () => {
  const [project, setProject] = useState("");
  const [skills, setSkills] = useState("");
  const [certification, setCertification] = useState("");
  const [experience, setExperience] = useState("");
  const [comapny, setCompany] = useState("");
  const [jobRole, setJobRole] = useState("");
  const [jobDescription, setJobDescription] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
    const history = useHistory();

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        console.log("Sending request to the backend...");
        console.log("Token:", sessionStorage.getItem("access-token")); // Check if the token is present

        const response = await axios.get(
          `http://3.110.131.163:5000/getFormData?form_type=projects`,
          {
            headers: {
              Authorization: `Bearer ${sessionStorage.getItem("access-token")}`,
            },
          }
        );

        const data = response.data;
        console.log(data);
        if (data.data) {
          setProject(data.data);
        }
      } catch (error) {
        console.error("Error fetching form data:", error);
      }
    };

    const fetchSkills = async () => {
      try {
        console.log("Sending request to the backend...");
        console.log("Token:", sessionStorage.getItem("access-token")); // Check if the token is present

        const response = await axios.get(
          `http://3.110.131.163:5000/getFormData?form_type=skills`,
          {
            headers: {
              Authorization: `Bearer ${sessionStorage.getItem("access-token")}`,
            },
          }
        );

        const data = response.data;
        console.log(data);
        if (data.data) {
          setSkills(data.data);
        }
      } catch (error) {
        console.error("Error fetching form data:", error);
      }
    };

    const fetchcertifications = async () => {
      try {
        console.log("Sending request to the backend...");
        console.log("Token:", sessionStorage.getItem("access-token")); // Check if the token is present

        const response = await axios.get(
          `http://3.110.131.163:5000/getFormData?form_type=certifications`,
          {
            headers: {
              Authorization: `Bearer ${sessionStorage.getItem("access-token")}`,
            },
          }
        );

        const data = response.data;
        console.log(data);
        if (data.data) {
          setCertification(data.data);
        }
      } catch (error) {
        console.error("Error fetching form data:", error);
      }
    };

    const fetchExperience = async () => {
      try {
        console.log("Sending request to the backend...");
        console.log("Token:", sessionStorage.getItem("access-token")); // Check if the token is present

        const response = await axios.get(
          `http://3.110.131.163:5000/getFormData?form_type=experience`,
          {
            headers: {
              Authorization: `Bearer ${sessionStorage.getItem("access-token")}`,
            },
          }
        );

        const data = response.data;
        console.log(data);
        if (data.data) {
          setExperience(data.data);
        }
      } catch (error) {
        console.error("Error fetching form data:", error);
      }
    };

    const fetchCompanyName = async () => {
      try {
        console.log("Sending request to the backend...");
        console.log("Token:", sessionStorage.getItem("access-token")); // Check if the token is present

        const response = await axios.get(
          `http://3.110.131.163:5000/fetchJobData?form_type=company_name`,
          {
            headers: {
              Authorization: `Bearer ${sessionStorage.getItem("access-token")}`,
            },
          }
        );

        const data = response.data;
        console.log(data);
        if (data.data) {
          setCompany(data.data);
        }
      } catch (error) {
        console.error("Error fetching form data:", error);
      }
    };

    const fetchJobRole = async () => {
      try {
        console.log("Sending request to the backend...");
        console.log("Token:", sessionStorage.getItem("access-token")); // Check if the token is present

        const response = await axios.get(
          `http://3.110.131.163:5000/fetchJobData?form_type=job_role`,
          {
            headers: {
              Authorization: `Bearer ${sessionStorage.getItem("access-token")}`,
            },
          }
        );

        const data = response.data;
        console.log(data);
        if (data.data) {
          setJobRole(data.data);
        }
      } catch (error) {
        console.error("Error fetching form data:", error);
      }
    };

    const fetchJobDescription = async () => {
      try {
        console.log("Sending request to the backend...");
        console.log("Token:", sessionStorage.getItem("access-token")); // Check if the token is present

        const response = await axios.get(
          `http://3.110.131.163:5000/fetchJobData?form_type=job_description`,
          {
            headers: {
              Authorization: `Bearer ${sessionStorage.getItem("access-token")}`,
            },
          }
        );

        const data = response.data;
        console.log(data);
        if (data.data) {
          setJobDescription(data.data);
        }
      } catch (error) {
        console.error("Error fetching form data:", error);
      }
    };

    fetchProjects();
    fetchSkills();
    fetchcertifications();
    fetchExperience();
    fetchCompanyName();
    fetchJobRole();
    fetchJobDescription();
  }, []);

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
      <nav className="bg-gray-800 p-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <span className="text-white"> Edit Your Information</span>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <div
                  onClick={() => {
                    history.push("/interview");
                  }}
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Go to Interview
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <section className="bg-gray-50 dark:bg-gray-900">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Edit Your Information
              </h1>
              <form className="space-y-4 md:space-y-6" action="#">
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Edit Your Projects
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
                    Edit Your Skills
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
                    Edit Your Certifications
                  </label>
                  <input
                    type="text"
                    value={certification}
                    onChange={(e) => setCertification(e.target.value)}
                    name="certifications"
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
                    Edit Your Professional Experience
                  </label>
                  <input
                    type="text"
                    value={experience}
                    onChange={(e) => setExperience(e.target.value)}
                    name="experience"
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
                    Edit Your Company Name
                  </label>
                  <input
                    type="text"
                    value={comapny}
                    onChange={(e) => setCompany(e.target.value)}
                    name="companyName"
                    id="companyName"
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
                    Edit Your Job Role
                  </label>
                  <input
                    type="text"
                    value={jobRole}
                    onChange={(e) => setJobRole(e.target.value)}
                    name="jobRole"
                    id="jobRole"
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
                    Edit Your Job Description
                  </label>
                  <input
                    type="text"
                    value={jobDescription}
                    onChange={(e) => setJobDescription(e.target.value)}
                    name="jobDescription"
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

export default EditInformation;

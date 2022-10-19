import React, { useState, useEffect } from "react";
import OutputWindow from "./OutputWindow";
import CustomInput from "./CustomInput";
import OutputDetails from "./OutputDetails";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import useKeyPress from "./useKeyPress";

const Compile = ({ language, code }) => {
  const [customInput, setCustomInput] = useState("");
  const [outputDetails, setOutputDetails] = useState(null);
  const [processing, setProcessing] = useState(null);

  const enterPress = useKeyPress("Enter");
  const ctrlPress = useKeyPress("Control");

  console.log(outputDetails);

  useEffect(() => {
    if (enterPress && ctrlPress) {
      console.log("Enter Pressed", enterPress);
      console.log("Control Pressed", ctrlPress);
      handleCompile();
    }
  }, [enterPress, ctrlPress]);

  const showSuccessToast = (msg) => {
    toast.success(msg || "Compiled Successfully!", {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };
  const showErrorToast = (msg) => {
    toast.success(msg || "Compiled Not Successful!", {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  const handleCompile = () => {
    setProcessing(true);
    const formData = {
      language_id: language.id,
      source_code: btoa(code),
      stdin: btoa(customInput),
    };
    const options = {
      method: "POST",
      url: "https://judge0-ce.p.rapidapi.com/submissions",
      params: { base64_encoded: "true", fields: "*" },
      headers: {
        "content-type": "application/json",
        "Content-Type": "application/json",
        "X-RapidAPI-Key": "0535cffd5dmsh3733c7ae49b35a1p197dfcjsne99dea23aaf5",
        "X-RapidAPI-Host": "judge0-ce.p.rapidapi.com",
      },
      data: formData,
    };
    axios
      .request(options)
      .then((res) => {
        console.log("res.data", res.data);
        const token = res.data.token;
        checkStatus(token);
      })
      .catch((err) => {
        let error = err.response ? err.response.data : err;
        setProcessing(false);
        console.log(error);
      });
  };

  const checkStatus = async (token) => {
    const options = {
      method: "GET",
      url: "https://judge0-ce.p.rapidapi.com/submissions" + "/" + token,
      params: { base64_encoded: "true", fields: "*" },
      headers: {
        "X-RapidAPI-Host": "judge0-ce.p.rapidapi.com",
        "X-RapidAPI-Key": "0535cffd5dmsh3733c7ae49b35a1p197dfcjsne99dea23aaf5",
      },
    };
    try {
      let response = await axios.request(options);
      let statusId = response.data.status?.id;

      // Processed - we have a result
      if (statusId === 1 || statusId === 2) {
        // still processing
        setTimeout(() => {
          checkStatus(token);
        }, 2000);
        return;
      } else {
        setProcessing(false);
        setOutputDetails(response.data);
        showSuccessToast(`Compiled Successfully!`);
        console.log("response.data", response.data);
        return;
      }
    } catch (err) {
      console.log("err", err);
      setProcessing(false);
      showErrorToast();
    }
  };

  return (
    <div className="right-container flex flex-shrink-0 w-[30%] flex-col">
      <OutputWindow outputDetails={outputDetails} />
      <div className="flex flex-col items-end">
        {/* <CustomInput
              customInput={customInput}
              setCustomInput={setCustomInput}
            /> */}
        <button onClick={handleCompile} disabled={!code}>
          {processing ? "Processing..." : "Compile and Execute"}
        </button>
      </div>
      <div className="container">
        <div></div>
      </div>
      {outputDetails && <OutputDetails outputDetails={outputDetails} />}
      <ToastContainer
        style={{ width: "10%", color: "white" }}
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
};

export default Compile;

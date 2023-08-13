import React from "react";
import "./SendMail.css";
import CloseIcon from "@mui/icons-material/Close";
import { Button } from "@mui/material";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { closeSendMessage } from "./features/mailSlice";

function SendMail() {
  const { register, handleSubmit, watch, errors } = useForm();
  const dispatch = useDispatch();
  const registerInput = (name, options) => {
    return register(name, {
      required: true,
    });
  };

  const onSubmit = (formData) => {
    console.log(formData);
  };

  return (
    <div className="sendMail">
      <div className="sendMail_header">
        <h3>New Message</h3>
        <CloseIcon  className="sendMail_close" onClick={()=> dispatch(closeSendMessage())} />
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          name="to"
          placeholder="TO"
          type="email"
          ref={registerInput("to", {
            required: true,
          })}
        />

        {/* {errors.to && <p className="sendMail_error">To is Required!</p>} */}
        <input
          name="subject"
          placeholder="Subject"
          type="text"
          ref={registerInput("subject", {
            required: true,
          })}
        />
          {/* {errors.subject && <p className="sendMail_error">To is subject!</p>} */}
        <input
          name="message"
          placeholder="Message..."
          type="text"
          className="sendMail_message"
          ref={registerInput("message", {
            required: true,
          })}
        />
  {/* {errors.message && <p className="sendMail_error">To is message!</p>} */}
        <div className="sendMail_options">
          <Button
            className="sendMail_send"
            variant="contained"
            color="primary"
            type="submit"
          >
            Send
          </Button>
        </div>
      </form>
    </div>
  );
}

export default SendMail;

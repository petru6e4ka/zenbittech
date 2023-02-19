import React, {
  ChangeEventHandler,
  FC,
  useCallback,
  useRef,
  useState,
} from "react";
import { Button, TextInput, TextArea, Title } from "src/components";
import styled from "styled-components";
import { IFeedback } from "src/redux/feedback/store";
import { feedback } from "src/redux/store";
import { batch, useStore } from "react-redux";
import * as services from "src/service";
import { object, string } from "yup";

const feedbackSchema = object({
  message: string()
    .required()
    .min(10, "message must be at least 10 characters long"),
  email: string().email().required(),
  name: string().required().min(2, "name must be at least 2 characters long"),
});

export const FeedbackForm: FC = () => {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const { getState, dispatch } = useStore();
  const formRef = useRef<HTMLFormElement>(null);

  const onNameChange: ChangeEventHandler<HTMLInputElement> = useCallback(
    (e) => {
      dispatch(feedback.actions.setName(e.target.value));
    },
    [dispatch]
  );

  const onEmailChange: ChangeEventHandler<HTMLInputElement> = useCallback(
    (e) => {
      dispatch(feedback.actions.setEmail(e.target.value));
    },
    [dispatch]
  );

  const onMessageChange: ChangeEventHandler<HTMLTextAreaElement> = useCallback(
    (e) => {
      dispatch(feedback.actions.setMessage(e.target.value));
    },
    [dispatch]
  );

  const onSubmit = useCallback(
    async (e: React.SyntheticEvent) => {
      e.preventDefault();

      const { feedback: userFeedback } = getState() as {
        feedback: IFeedback;
      };

      await feedbackSchema
        .validate(userFeedback)
        .then(async (userFeedback) => {
          const { response } = await services.feedback.create(
            userFeedback as IFeedback
          );

          if (response.ok) {
            setError("");
            setSuccess(true);
          }

          if (!response.ok) {
            setError("Something went wrong, please, try later");
          }

          batch(() => {
            dispatch(feedback.actions.setName(""));
            dispatch(feedback.actions.setEmail(""));
            dispatch(feedback.actions.setMessage(""));
          });

          if (formRef.current) {
            formRef.current.reset();
          }
        })
        .catch((err) => setError(err.message));
    },
    [dispatch, getState]
  );

  return (
    <Form ref={formRef}>
      <Title text={"Reach out to us!"} />
      <TextInput
        name="name"
        placeholder={"Your name"}
        onChange={onNameChange}
        required
      />
      <TextInput
        name="email"
        placeholder={"Your e-mail"}
        onChange={onEmailChange}
        required
      />
      <TextArea
        name="message"
        placeholder={"Your message"}
        onChange={onMessageChange}
        required
      />
      <Button text={"Send message"} onClick={onSubmit} />
      <Error>{error}</Error>
      {success && <Success>We saved your feedback! Thank you!</Success>}
    </Form>
  );
};

export default FeedbackForm;

const Form = styled.form`
  min-width: 50%;
  max-width: 585px;
  padding: 13px;
`;

const Error = styled.p`
  color: #c4154f;
`;

const Success = styled.p`
  color: var(--CTA);
`;

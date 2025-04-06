import React from "react";
import {
  Button,
  Col,
  Container,
  Grid,
  IconButton,
  Message,
  Panel,
  Row,
} from "rsuite";
import GoogleIcon from "@rsuite/icons/Google";
import "../styles/utility.scss";
import { getAdditionalUserInfo, signInWithPopup } from "firebase/auth";
import { auth, db, provider } from "../../firebase";
const SignIn = () => {
  const SignInWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result;
      const isNewUser =
        result._tokenResponse?.isNewUser ??
        result.additionalUserInfo?.isNewUser;
      console.log(user);
      if (isNewUser) {
        // await setDoc(doc(db, "users", user.uid), {
        //   name: user.displayName,
        //   email: user.email,
        //   photoURL: user.photoURL,
        //   createdAt: new Date(),
        //   uid: user.uid,
        // });

        console.log("New user info saved to Firestore.");
      }
      //  if(additionalUserInfo.isNewUser){
      //   Database.ref(`/profiles/${user.uid}`)
      //  }
    } catch (error) {
      <Message type="info">{error.message}</Message>;
    }
  };
  return (
    <>
      <Container>
        <Grid className="mt-page">
          <Row>
            <Col xs={24} md={12} mdOffset={6}>
              <Panel>
                <div className="text-center">
                  <h2>Welcome to Chat app</h2>
                  <p>Progressive chat plateform</p>
                </div>
                <div>
                  <Button block color="green" onClick={SignInWithGoogle}>
                    <IconButton icon={<GoogleIcon />} /> Continue with google
                  </Button>
                </div>
              </Panel>
            </Col>
          </Row>
        </Grid>
      </Container>
    </>
  );
};

export default SignIn;

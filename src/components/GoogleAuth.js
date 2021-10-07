import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { signIn, signOut } from "../actions";

const GoogleAuth = ({ signIn, signOut, isSignedIn }) => {
  const [auth, setAuth] = useState({});

  useEffect(() => {
    window.gapi.load("client:auth2", () => {
      window.gapi.client
        .init({
          client_id:
            "934100000177-tage63kpfhbqtna2lbnqiubj7ss307ql.apps.googleusercontent.com",
          scope: "email",
        })
        .then(() => {
          setAuth(Object.assign(auth, window.gapi.auth2.getAuthInstance()));
          onAuthChange(auth.isSignedIn.get());
          auth.isSignedIn.listen(onAuthChange);
        });
    });
  }, []);

  const onAuthChange = (isSignedIn) => {
    console.log(isSignedIn);
    if (isSignedIn) {
      signIn(auth.currentUser.get().getId());
    } else {
      signOut();
    }
  };

  const signin = () => {
    auth.signIn();
  };

  const signout = () => {
    auth.signOut();
  };

  const checkIfUserIsSignedIn = () => {
    if (isSignedIn === null) {
      return null;
    } else if (isSignedIn) {
      return (
        <button onClick={signout} className="ui red button">
          <i className="google icon" />
          Sign Out
        </button>
      );
    } else {
      return (
        <button onClick={signin} className=" ui black button">
          <i className="google icon" />
          Sign in with Google
        </button>
      );
    }
  };
  return <div>{checkIfUserIsSignedIn()}</div>;
};

const mapStateToProps = (state) => {
  return { isSignedIn: state.auth.isSignedIn };
};
export default connect(mapStateToProps, { signIn, signOut })(GoogleAuth);

import { Query } from "react-apollo";
import { CURRENT_USER_QUERY } from "./CurrentUser";
import SignUpPage from "../pages/signup";
import Spinner from "./styles/Spinner";

const SignInFirst = props => (
  <Query query={CURRENT_USER_QUERY}>
    {({ data: { me }, loading }) => {
      if (loading) return <Spinner />;
      if (!me)
        return (
          <div>
            <h2 style={{ textAlign: "center" }}>Please sign in first</h2>
            <SignUpPage />
          </div>
        );
      return <>{props.children}</>;
    }}
  </Query>
);

export default SignInFirst;

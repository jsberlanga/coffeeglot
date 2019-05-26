import { Query } from "react-apollo";
import gql from "graphql-tag";

const CURRENT_USER_QUERY = gql`
  query {
    me {
      id
      email
      teachers {
        id
        name
      }
      courses {
        id
        title
      }
      votes {
        id
        teacher {
          id
          name
        }
      }
    }
  }
`;

const CurrentUser = props => (
  <Query {...props} query={CURRENT_USER_QUERY}>
    {payload => props.children(payload)}
  </Query>
);

export default CurrentUser;
export { CURRENT_USER_QUERY };

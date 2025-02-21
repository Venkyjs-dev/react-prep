import { useState } from "react";

// WithAuth is Higher Order Component
const WithAuth = (WrappedComponent) => {
  return (props) => {
    const [isUser, setIsUser] = useState(true);
    const user = { name: "venky", role: "Engineer" };
    if (!isUser) return <div>User not loggedin....</div>;

    return <WrappedComponent {...props} user={user} />;
  };
};

export default WithAuth;

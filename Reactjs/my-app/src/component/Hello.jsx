// import logo from './logo.svg';
import "../App.css";

const name = "Fritz Lim";

const user = { firstName: "Fritz", lastName: "Lim" };

const getUserName = () => {
  //   return user.firstName + " " + user.lastName;
  return `${user.firstName} ${user.lastName}`;
};

function Hello() {
  // This is the Hello component.
  return (
    <div className="App">
      <p>Hello, {name}</p>
      <p>Your full name is: {getUserName()}</p>
    </div>
  );
}

export default Hello;

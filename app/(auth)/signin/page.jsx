import GoogleLoginButton from "app/components/auth/GoogleSignInButton";

const SignInPage = () => {
  return (
    <div className="flex" style={{}}>
      {/* Text Panel on the Left */}
      <div
        className="w-1/3 flex-shrink-0 bg-gray-200 p-4"
        style={{
          backgroundColor: "gray",
          borderTopLeftRadius: "25px",
          borderBottomLeftRadius: "25px",
        }}
      >
        {/* Add your text content here */}
        <h2 className="mb-4 text-2xl font-bold" style={{ fontSize: "30px" }}>
          Howdy c:
        </h2>
        <p
          className="text-gray-600"
          style={{ fontSize: "20px", color: "peach" }}
        >
          Sign in to your account using Google authentication.
        </p>
      </div>

      {/* Google Login Button on the Right */}
      <div
        className="flex-grow p-4"
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center", // Center horizontally as well, if needed
          // height: "100vh", // This makes the div take up the full viewport height
          textAlign: "center", // This aligns the text center if that's desired for all children
        }}
      >
        <h2
          className="mb-4 text-2xl font-bold"
          style={{ color: "orange", fontSize: "40px", textAlign: "center" }}
        >
          Sign-In
        </h2>
        <GoogleLoginButton />
      </div>
    </div>
  );
};

export default SignInPage;

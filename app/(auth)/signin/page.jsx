import GoogleLoginButton from 'app/components/auth/GoogleSignInButton';

const SignInPage = () => {
  return (
    <div className="flex" style={{}}>
      {/* Text Panel on the Left */}
      <div className="flex-shrink-0 w-1/3 p-4 bg-gray-200" style={{backgroundColor:"gray", borderTopLeftRadius:"25px", borderBottomLeftRadius:"25px"}}>
        {/* Add your text content here */}
        <h2 className="text-2xl font-bold mb-4" style={{fontSize:"30px"}}>Howdy c:</h2>
        <p className="text-gray-600" style={{fontSize:"20px", color: "peach"}}>
          Sign in to your account using Google authentication.
        </p>
      </div>

      {/* Google Login Button on the Right */}
      <div className="flex-grow p-4">
      <h2 className="text-2xl font-bold mb-4" style={{color: "orange", fontSize:"40px", textAlign:"center"}}>Sign-In</h2>
        <GoogleLoginButton />
      </div>
    </div>
  );
};

export default SignInPage;
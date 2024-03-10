import GoogleLoginButton from 'app/components/auth/GoogleSignInButton';

const SignInPage = () => {
  return (
    <div className="flex">
      {/* Text Panel on the Left */}
      <div className="flex-shrink-0 w-1/3 p-4 bg-gray-200" style={{backgroundColor:"gray"}}>
        {/* Add your text content here */}
        <h2 className="text-2xl font-bold mb-4">Welcome Back!</h2>
        <p className="text-gray-600">
          Sign in to your account using Google authentication.
        </p>
      </div>

      {/* Google Login Button on the Right */}
      <div className="flex-grow p-4">
        <GoogleLoginButton />
      </div>
    </div>
  );
};

export default SignInPage;
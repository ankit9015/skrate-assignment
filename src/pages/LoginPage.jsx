import React from "react";
import "./pages.css";

function LoginPage() {
  return (
    <main className="login">
      <div className="logo">Logo</div>
      <img className="login__curves" src="./curve.svg" alt="curves" />
      <section className="login__content">
        <p className="text-md">Welcome back to Skrate!!</p>
        <button className="button button--primary text-md">
          Sign in with Google
        </button>
      </section>
      <img className="login__hero-img" src="./hero.svg" alt="hero-img" />
    </main>
  );
}

export default LoginPage;

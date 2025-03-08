"use client";

import Link from "next/link";
import { useState } from "react";
import DoctorSignUp from "./doctor-signup";
import PatientSignUp from "./patient-signup";

export default function SignUp() {
  const [isDoctor, setIsDoctor] = useState(false);
  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto">
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="px-6">
            <label className="font-bold"> Is Doctor?</label>
            <input type="checkbox" onChange={(e) => setIsDoctor(!isDoctor)} />
          </div>
          <div>{isDoctor ? <DoctorSignUp /> : <PatientSignUp />}</div>
        </div>
      </div>
    </section>
  );
}

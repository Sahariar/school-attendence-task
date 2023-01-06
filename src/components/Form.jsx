import React, { useState } from "react";

const Form = ({ setStudentData, studentData }) => {
	const [countId, setCountId] = useState(1);

	const handleRegister = (event) => {
		event.preventDefault();
		const form = event.target;
		const studentName = form.studentName.value;
		const rollNumber = form.rollNumber.value;
		if (studentName === "") {
			return <p>Please Fill the From. </p>;
		}

		const today = new Date();
		const time = today.toLocaleString("en-US", {
			hour: "numeric",
			minute: "numeric",
			hour12: true,
		});
		const studentEntry = {
			id: countId,
			studentName: studentName,
			rollNumber: rollNumber,
			checkInTime: time,
			checkOutTime: "no value",
		};
		setStudentData([...studentData, studentEntry]);
		setCountId((countId) => countId + 1);
	};

	return (
		<>
			<section className="p-6 ">
				<form
					className="container flex flex-col mx-auto space-y-12 ng-untouched ng-pristine ng-valid"
					onSubmit={handleRegister}
				>
					<fieldset className="grid grid-cols-4 gap-6 p-6 rounded-xl shadow-xl">
						<div className="space-y-2 col-span-full">
							<p className="font-medium">Student Information</p>
						</div>
						<div className="grid grid-cols-2 gap-4 col-span-full">
							<div className="col-span-full">
								<label htmlFor="studentName" className="text-sm"></label>
								<input
									name="studentName"
									type="text"
									placeholder="Student name"
									className="input max-w-xs w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900"
									required
								/>
							</div>
							<div className="col-span-full">
								<label htmlFor="rollNumber" className="text-sm"></label>
								<input
									name="rollNumber"
									type="number"
									placeholder="Roll Number"
									className="input max-w-xs w-full  rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900"
									required
								/>
							</div>
							<div className="col-span-full">
								<button className="btn btn-primary w-full max-w-xs">
									Submit
								</button>
							</div>
						</div>
					</fieldset>
				</form>
			</section>
		</>
	);
};

export default Form;

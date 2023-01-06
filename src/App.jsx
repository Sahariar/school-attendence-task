import { useState } from "react";
import "./App.css";
import Form from "./components/form";
import Table from "./components/Table";

function App() {
	const [studentData, setStudentData] = useState([]);
	const today = new Date();
	const todayDate =
		today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();
	// button function for Checkout time.need to implement.
	const handleCheckOut = (id) => {
		console.log(id);
		const today = new Date();
		const time = today.toLocaleString("en-US", {
			hour: "numeric",
			minute: "numeric",
			hour12: true,
		});
		console.log(studentData[id]);
		// setStudentData()

		setStudentData((current) =>
			current.map((obj) => {
				if (obj.id === id) {
					return { ...obj, checkOutTime: time };
				}

				return obj;
			})
		);
	};
	return (
		<div className="App">
			<div className="container">
				<div className="input-area max-w-md mx-auto my-4">
					<Form
						setStudentData={setStudentData}
						studentData={studentData}
					></Form>
				</div>
				<h2 className="text-xl py-10">
					Total {studentData?.length} students is Present In School
				</h2>
				<p>Today Is {todayDate}</p>
				<div className="data-area  mx-auto my-4">
					<Table
						studentData={studentData}
						handleCheckOut={handleCheckOut}
					></Table>
				</div>
			</div>
		</div>
	);
}

export default App;

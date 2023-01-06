import React from "react";

const Table = ({ studentData, handleCheckOut }) => {
	return (
		<>
			<div className="overflow-x-auto">
				<table className="table w-full">
					<thead>
						<tr>
							<th></th>
							<th>Student Name</th>
							<th>Roll Number</th>
							<th> CheckIn Time</th>
							<th>CheckOut Time</th>
						</tr>
					</thead>
					<tbody>
						{studentData.length > 0 ? (
							studentData.map((student) => (
								<tr key={student.id} className="hover">
									<th>{student.id}</th>
									<td>{student.studentName}</td>
									<td>{student.rollNumber}</td>
									<td>{student.checkInTime}</td>
									<td>
										{student?.checkOutTime !== "no value" ? (
											student?.checkOutTime
										) : (
											<button
												className="btn btn-neutral"
												onClick={() => {
													handleCheckOut(student.id);
												}}
											>
												Checkout Log
											</button>
										)}
									</td>
								</tr>
							))
						) : (
							<tr>
								<th>1</th>
								<td>No Data</td>
								<td>No Data</td>
								<td>No Data</td>
								<td>No Data</td>
							</tr>
						)}
					</tbody>
				</table>
			</div>
		</>
	);
};

export default Table;

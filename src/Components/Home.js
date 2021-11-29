import React,{useState} from 'react';

function Home(){
	const [uname, setUname]=useState('');
	const [gender, setGender]=useState('');
	const [age, setAge]=useState('');
	const [desg, setDesg]=useState('');
	const [dept, setDept]=useState('');
	const [jdate, setJdate]=useState('');
	const [ava, setAva]=useState(true);
	const	[emp, setEmp]=useState([]);
	const	[id, setId]=useState('');



	const submit = (e) => {
		e.preventDefault();
		const data={ava:true,uname, gender, age, desg, dept, jdate}
		if(!uname || !gender || !age || !desg || !dept || !jdate){
			alert("fields cannot be empty");
		}else{
			document.getElementsByClassName(close);
			alert("successfull");
			emp.splice(0,0, data);
			setEmp([...emp]);

		setUname('');
		setGender('');
		setAge('');
		setDesg('');
		setDept('');
		setJdate('');

		}
	}

	const onDelete = (index) => {
	
		emp.splice(index,1)
		setEmp([...emp]);
	}

	const onEdit = (name, dept, id) => {
		setId(id);
		setUname(name);
		setDept(dept);
	}

	const update = () => {
	
		const data={uname, gender, age, desg, dept, jdate}
		emp[id]=data;
		setEmp([...emp])
		setUname('');
		setGender('');
		setAge('');
		setDesg('');
		setDept('');
		setJdate('');
	
	}

	const value = () => {
		for( var i=0; i<emp.length; i++){
			if (emp[i].ava == true){
					count++;
					console.log(count)
			}
		}
	} 

  return(
    <>
    <nav className="navbar navbar-expand-md navbar-light bg-light">
		<a className="navbar-brand" href="https://www.logic-square.com" target="_blank">
			<img src="https://res.cloudinary.com/www-logic-square-com/image/upload/v1551945805/ls-logo.png"
				className="ls-logo" alt="LS Logo" />
		</a>
		<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
			aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
			<span className="navbar-toggler-icon"></span>
		</button>
		<div className="collapse navbar-collapse" id="navbarNav">
			<ul className="navbar-nav ml-auto">
				<li className="nav-item active">
					<a className="nav-link" href="#">Page Name</a>
				</li>
			</ul>
		</div>
	</nav>

	<div className="container-fluid">
		<div className="row">
			<div className="col-12">
				<div className="question-dashboard">
					<div className="card mt-4 mb-3 mb-md-4">
						<div className="card-body p-3">
							<h5 className="text-secondary mb-2">Available: <span
									className="font-weight-bold ml-1 text-dark">{emp.length}</span></h5>
							<h5 className="text-secondary">Total: <span className="font-weight-bold ml-1 text-dark">{emp.length}</span>
							</h5>
							​
							<button className="btn btn-primary mt-4" data-toggle="modal" data-target="#addEmployeeModal">
								<i className="fa fa-plus"></i>&nbsp; Add Employee</button>
						</div>
					</div>
					​
					<div className="table-responsive mt-3 mt-md-4 mb-2">
						<table className="table table-bordered">
							<thead>
								<tr>
									<th>Name</th>
									<th>Department</th>
									<th>Available</th>
									<th>View Details</th>
								</tr>
							</thead>
							{emp.map((value, index)=>(
							<tbody key={index}>
								<tr >
									<td>{value.uname}</td>
									<td>{value.dept}</td>
									<td>
										<div className="custom-control custom-checkbox">
											<input type="checkbox" className="custom-control-input" id="customCheck1"
												checked={ava} onChange={(e)=>setAva(e.target.checked)} />
											<label className="custom-control-label" htmlFor="customCheck1"></label>
										</div>
									</td>
									<td>
										<button type="button" className="btn btn-outline-info btn-sm" data-toggle="modal" data-target="#editEmployeeModal" onClick={()=>{onEdit(value.uname, value.dept, index)}}>
											<i className="fa fa-edit"></i>&nbsp; Edit
                    </button>
                    <button type="button" className="btn btn-outline-danger btn-sm" onClick={()=>{onDelete(index)}}>
											<i className="fa fa-trash" ></i>&nbsp; Delete
										</button>
									</td>
								</tr>
							</tbody>))}
						</table>
					</div>
				</div>
			</div>
		</div> 
	</div>
	​
	
	<div className="modal fade" id="addEmployeeModal" tabIndex="-1" role="dialog" aria-labelledby="addEmployeeModal"
		aria-hidden="true">
		<div className="modal-dialog modal-dialog-centered" role="document">
			<div className="modal-content">
				<div className="modal-header pt-3 pb-2">
					<h5 className="modal-title" id="exampleModalCenterTitle">Add Employee</h5>
					<button type="button" className="close" data-dismiss="modal" aria-label="Close">
						<span aria-hidden="true">&times;</span>
					</button>
				</div>
				<div className="modal-body">
					<form >
						<div className="form-row ">
							<div className="form-group col-md-6">
								<label htmlFor="" className="mb-1">Name</label>
								<input type="text" className="form-control" id="" placeholder="Enter" value={uname} onChange={(e)=>{setUname(e.target.value)}} required/>
							</div>
							<div className="form-group col-md-6">
								<label htmlFor="" className="mb-1">Gender</label>
								<select className="form-control" id="exampleFormControlSelect1" value={gender} onChange={(e)=>{setGender(e.target.value)}} required>
									<option>Select</option>
									<option>Male</option>
									<option>Female</option>
								</select>
							</div>
							<div className="form-group col-md-6">
								<label htmlFor="" className="mb-1">Age</label>
								<input type="number" className="form-control" id="" placeholder="Enter" value={age} onChange={(e)=>{setAge(e.target.value)}} required/>
							</div>
							<div className="form-group col-md-6">
								<label htmlFor="" className="mb-1">Designation</label>
								<input type="text" className="form-control" id="" placeholder="Enter" value={desg} onChange={(e)=>{setDesg(e.target.value)}} required/>
							</div>
							<div className="form-group col-md-6">
								<label htmlFor="" className="mb-1">Department</label>
								<input type="text" className="form-control" id="" placeholder="Enter" value={dept} onChange={(e)=>{setDept(e.target.value)}} required/>
							</div>
							<div className="form-group col-md-6">
								<label htmlFor="" className="mb-1">Joining Date</label>
								<input type="date" className="form-control" id="" placeholder="" value={jdate} onChange={(e)=>{setJdate(e.target.value)}} required/>
							</div>
						</div>
					</form>
				</div>
				<div className="modal-footer">
					<button type="button" className="btn btn-outline-danger btn-sm" data-dismiss="modal">Cancel</button>
					<button type="submit" className="btn btn-success btn-sm" data-dismiss="modal" onClick={submit}>Save</button>
				</div>
			</div>
		</div>
	</div> 

	<div className="modal fade" id="editEmployeeModal" tabIndex="-1" role="dialog" aria-labelledby="editEmployeeModal"
		aria-hidden="true">
		<div className="modal-dialog modal-dialog-centered" role="document">
			<div className="modal-content">
				<div className="modal-header pt-3 pb-2">
					<h5 className="modal-title" id="exampleModalCenterTitle">Edit Employee</h5>
					<button type="button" className="close" data-dismiss="modal" aria-label="Close">
						<span aria-hidden="true">&times;</span>
					</button>
				</div>
				<div className="modal-body">
					<form >
						<div className="form-row ">
							<div className="form-group col-md-6">
								<label htmlFor="" className="mb-1">Name</label>
								<input type="text" className="form-control" id="" placeholder="Enter" value={uname} onChange={(e)=>{setUname(e.target.value)}} required/>
							</div>
							<div className="form-group col-md-6">
								<label htmlFor="" className="mb-1">Gender</label>
								<select className="form-control" id="exampleFormControlSelect1" value={gender} onChange={(e)=>{setGender(e.target.value)}} required>
									<option>Select</option>
									<option>Male</option>
									<option>Female</option>
								</select>
							</div>
							<div className="form-group col-md-6">
								<label htmlFor="" className="mb-1">Age</label>
								<input type="number" className="form-control" id="" placeholder="Enter" value={age} onChange={(e)=>{setAge(e.target.value)}} required/>
							</div>
							<div className="form-group col-md-6">
								<label htmlFor="" className="mb-1">Designation</label>
								<input type="text" className="form-control" id="" placeholder="Enter" value={desg} onChange={(e)=>{setDesg(e.target.value)}} required/>
							</div>
							<div className="form-group col-md-6">
								<label htmlFor="" className="mb-1">Department</label>
								<input type="text" className="form-control" id="" placeholder="Enter" value={dept} onChange={(e)=>{setDept(e.target.value)}} required/>
							</div>
							<div className="form-group col-md-6">
								<label htmlFor="" className="mb-1">Joining Date</label>
								<input type="date" className="form-control" id="" placeholder="" value={jdate} onChange={(e)=>{setJdate(e.target.value)}} required/>
							</div>
						</div>
					</form>
				</div>
				<div className="modal-footer">
					<button type="button" className="btn btn-outline-danger btn-sm" data-dismiss="modal">Cancel</button>
					<button type="submit" className="btn btn-success btn-sm" data-dismiss="modal" onClick={update}>Update</button>
				</div>
			</div>
		</div>
	</div> 

    </>
  )
}

export default Home;

function FindPersonRole(){
    return(


        <form className="needs-validation" noValidate="">

            <div className = "Create">
                <h1 className="display-4 fw-bold lh-1 mb-3">Find Person Based on Role</h1>
                <label htmlFor="Role" className="form-label">Role</label>
                <input type="text" className="form-control" id="firstName"/>
                <div className="invalid-feedback">
                    Valid first name is required.
                </div>


                <button type="button" className="btn btn-primary btn-lg px-4 gap-3">Find</button>
            </div>

        </form>


    )
}

export default FindPersonRole;
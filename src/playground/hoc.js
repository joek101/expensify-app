import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>This info is {props.info}</p>
    </div>
)

// HOC
const withAdminWarning = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAdmin && <p>This is private info. Please don't share!</p>}
            <WrappedComponent {...props}/>
        </div>
    );
};


const AdminInfo = withAdminWarning(Info);

ReactDOM.render(<AdminInfo info="test stuff" isAdmin="true" />, document.getElementById('app'));

/* const requireAuthentication = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAuthenticated ? <WrappedComponent {...props} />: <p>NOPE</p>}
        </div>
    )
};

const RequireAuth = requireAuthentication(Info);

ReactDOM.render(<RequireAuth info="test stuff" isAuthenticated={false} />, document.getElementById('app'));  */

/* Challenge:
Create a HOC called requireAuthentication. Use the ternary operator. 
If the prop isAuthenticated is true show the component. 
If not show a message: “Please login to view the info”: */

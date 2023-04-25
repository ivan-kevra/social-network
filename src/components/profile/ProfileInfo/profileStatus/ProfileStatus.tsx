import React, {ChangeEvent} from 'react';

class ProfileStatus extends React.Component<any, any> {

    state = {
        editMode: false,
        status: this.props.status
    }

    activateEditMode = () => {
        this.setState({
            editMode: true
        })
    }

    deactivateEditMode = () => {
        this.setState({
            editMode: false
        })
        this.props.updateStatus(this.state.status)
    }
    onStatusChange = (event: ChangeEvent<HTMLInputElement>) => {
        this.setState({
            status: event.currentTarget.value
        })
    }

    componentDidUpdate(prevProps: Readonly<any>, prevState: Readonly<any>, snapshot?: any) {
        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            })
        }
    }

    render() {
        return (
            <div>
                {!this.state.editMode &&
                    <div>
                        <span
                            onDoubleClick={this.activateEditMode}>{this.props.status ? this.props.status : 'no status'}</span>
                    </div>}
                {this.state.editMode &&
                    <div>
                        <input onBlur={this.deactivateEditMode}
                               value={this.state.status ? this.state.status : 'no status'}
                               autoFocus onChange={this.onStatusChange}/>
                    </div>}
            </div>

        );
    }
};

export default ProfileStatus;
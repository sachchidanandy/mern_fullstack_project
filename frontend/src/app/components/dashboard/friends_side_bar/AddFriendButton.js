import { useState } from 'react';
import { CustomPrimaryButton } from '../../shared';
import AddFriendDialog from './AddFriendDialog';

const additionalStyle = {
    marginTop: 10,
    marginLeft: 5,
    width: '80%',
    height: 30,
    background: '#3ba55d',
};

const AddFriendButton = props => {
    const [openDialog, setOpenDialog] = useState(false);

    const closeDialogHandler = () => {
        setOpenDialog(false);
    };

    const handleOpenAddFriendDialog = () => {
        setOpenDialog(true);
    };

    return (
        <>
            <CustomPrimaryButton
                additionalStyle={additionalStyle}
                label="Add Friend"
                onClickHandler={handleOpenAddFriendDialog}
            />
            <AddFriendDialog isDialogOpen={openDialog} closeDialogHandler={closeDialogHandler} />
        </>
    );
};

export default AddFriendButton;

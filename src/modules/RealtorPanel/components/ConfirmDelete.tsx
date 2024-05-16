import {Heading} from "../../../global/";
import {Button} from "../../../global";
import {StyledConfirmDelete} from "../style/ConfirmDeleteStyle.tsx";

function ConfirmDelete({ resourceName, onConfirm, disabled, onClose }) {
    return (
        <StyledConfirmDelete>
            <Heading as="h3">Delete {resourceName}</Heading>
            <p>
                Are you sure you want to delete this {resourceName} permanently? This
                action cannot be undone.
            </p>

            <div>
                <Button variation="secondary" disabled={disabled} onClick={onClose}>
                    Cancel
                </Button>
                <Button variation="danger" disabled={disabled} onClick={() => {onConfirm(); onClose()}}>
                    Delete
                </Button>
            </div>
        </StyledConfirmDelete>
    );
}

export default ConfirmDelete;

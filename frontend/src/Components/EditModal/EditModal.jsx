import React from 'react'
import { Model } from '@chakra-ui/react'

const EditModal = ({ config, children }) => {

    let { entity, modalTitle = translate('delete_confirmation') } = config;
    const dispatch = useDispatch();
    const { current, isLoading, isSuccess } = useSelector(selectDeletedItem);
    const { state, crudContextAction } = useCrudContext();
    const { isModalOpen } = state;
    const { modal } = crudContextAction;

    useEffect(() => {
        if (isSuccess) {
            modal.close();
            dispatch(crud.list({ entity }));
        }
    }, [isSuccess]);

    const handleOk = () => {
        const id = current._id;
        dispatch(crud.delete({ entity, id }));
    };
    const handleCancel = () => {
        if (!isLoading) modal.close();
    };

    return (
        <>
            <Model>
                {children}
            </Model>
        </>
    )
}

export default EditModal
import React from 'react'
import {
    Box, Button, Flex, FormControl, FormLabel, Input, Select,
} from '@chakra-ui/react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import { CKEditor } from '@ckeditor/ckeditor5-react'
import BoxLayout from '../../../Components/Layout/BoxLayout';

const CreateNewsLetter = () => {

    return (
    <BoxLayout labelText="Create Newsletter" showDivider={true}>
        <NewLetterForm />
    </BoxLayout>
    )
}

export default CreateNewsLetter

const NewLetterForm = () => {
    // const [content, setContent] = useState("")
    // const editorEl = useRef(null)

    return (
        <form action="">
            <FormControl mt={5}>
                <FormLabel>Select Rank</FormLabel>
                <Select>
                    <option>All</option>
                    <option>Rank 1</option>
                    <option>Rank 2</option>
                    <option>Rank 3</option>
                    <option>Rank 4</option>
                    <option>Rank 5</option>
                </Select>
            </FormControl>

            <FormControl mt={5}>
                <FormLabel>Subject</FormLabel>
                <Input type='text' placeholder='subject' />
            </FormControl>

            <Box mt={5}>
                <CKEditor
                    editor={ClassicEditor}
                    // onChange={(e, editor) => {
                    //     const data = editor.getData();
                    //     setContent(data)
                    // }}
                    // ref={editorEl}
                />
            </Box>

            <Flex justify="flex-end">
                <Button mt={5} bgColor="blue" color="whitesmoke" size="md">Send</Button>
            </Flex>
        </form>
    )
}   
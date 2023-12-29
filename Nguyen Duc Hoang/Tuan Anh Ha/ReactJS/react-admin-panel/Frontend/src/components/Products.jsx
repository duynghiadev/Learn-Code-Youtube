import {
  Create,
  Datagrid,
  Edit,
  EditButton,
  List,
  SimpleForm,
  TextField,
  TextInput
} from 'react-admin'

export const listProducts = (props) => (
  <List {...props}>
    <Datagrid>
      <TextField source='id' />
      <TextField source='name' />
      <TextField source='brand' />
      <TextField source='price' />

      <EditButton basePath='/products' />
    </Datagrid>
  </List>
)

export const editProduct = (props) => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput source='name' />
      <TextInput source='brand' />
      <TextInput source='price' />
    </SimpleForm>
  </Edit>
)

export const createProduct = (props) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source='name' />
      <TextInput source='brand' />
      <TextInput source='price' />
    </SimpleForm>
  </Create>
)

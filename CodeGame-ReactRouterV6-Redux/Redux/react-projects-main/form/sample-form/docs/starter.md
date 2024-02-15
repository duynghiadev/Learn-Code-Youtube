### Starting Point

- `npm install react-hook-form`
- for visualistaion `npm install -D @hookform/devtools`

### In a form we need to care about these things

- managing form data (eg:- your form is multi step form and you need to show data correctly that user has selected going back and forward)

- validations. provide good error validation to form inputs

- form submission

- Performance- react-hook-form doesn't renrender the whole form component on every key stroke, the way controller form does. it behaves in same way as uncontrolled form.

### Managing form data

lets say we want to register an input with name as "username"

```
  const {register} = useForm();
  const {name, ref, onChange, onBlur} = register("username");
```

### Form field validations and showing errors to the users

- add `noValidate` attribute ot the `form` to prevent error handling by HTML itself and let RHF takes the whole control

- RHF supports thses HTML level validations like `required`, `pattern`, `minLength and maxLength`, `min and max`

- How to add validation and error message to an input

```
  <input {...register("username", {
    "required": {
      value: true,
      message: "Username is a required field"
    }
  })}/>
```

- `When` does validation gets triggered:- `default only when we submit the form` We can change the validation mode also

- How to access these `error messages` to give feedback to the user?

```
  const {formState: {erros}} = useForm();

  <!-- Now if we want to access errors for a field named username -->

  <p>{errors.username?.message}</p>
  <!-- need to use optional channing as error.fieldName might return undefined and accessing message property on undefined will break the app -->
```

- adding custome validations:-

```
  <!-- we have an email field and we dont want to allow an id that ends with "@test.com" as an email value  -->
  register("email", {
    required: {
      value: true,
      message: "Email is required"
    },
    validate: {
      badDomain: (fieldValue) => {
        return !fieldValue.endsWith("@test.com") || "This email domain is unsupported"
      }
    }
  })
```

- so with the above setup there is a new `error of type called badDomain`

### Form submission

- `useForm` hook returns a function called `handleSubmit` which takes `2 arguments which are both handler functions. First handler runs when a valid form is submitted and second one runs when invalid form is submitted`

```
  const {handleSubmit} = useForm();

  const validFormSubmissionHandler = (formData) => {
    console.log("Data entered by user:- ", formData);
  }

  <form onSubmit={handleSubmit(validFormSubmissionHandler)}></form>
```

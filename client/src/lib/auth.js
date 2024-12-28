import { SignupFormSchema, SignInFormSchema } from './definicions'
 
export async function signup(state, formData) {
  // Validate form fields
  const validatedFields = SignupFormSchema.safeParse({
    firstName: formData.get('firstName'),
    lastName: formData.get('lastName'),
    country: formData.get('country'),
    email: formData.get('email'),
    prefix: formData.get('prefix'),
    phone: formData.get('phone'),
    role: formData.get('role'),
    password: formData.get('password'),
    confirm: formData.get('confirm')
  })
 
  // If any form fields are invalid, return early
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    }
  }
 
  // return data to the component
  return {
    data: validatedFields.data
  }  
}





export async function signin(state, formData) {
  // Validate form fields


  const validatedFields = SignInFormSchema.safeParse({
    email: formData.get('email'),
    password: formData.get('password'),
  })
 
  // If any form fields are invalid, return early
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    }
  }
 
  // return data to the component
  return {
    data: validatedFields.data
    
  }  
}

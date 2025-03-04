import { getDownloadURL, ref, uploadBytes } from 'firebase/storage'
import { storage } from './firebaseConfig'

export const saveImageFirebase = async (file) => {
  try {
    const storageRef = ref(storage, file.name)
    const uploadTask = await uploadBytes(storageRef, file)

    return {
      url: await getDownloadURL(uploadTask.ref),
      error: null
    }
  } catch (error) {
    console.log(error)

    return {
      url: null,
      error: true,
      message: 'Ocurrió un error al subir la imagen.'
    }
  }
}
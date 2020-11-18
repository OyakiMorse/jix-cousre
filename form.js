const Form = () => {
  const form = document.querySelectorAll('form')
  const inputs = document.querySelectorAll('input')

  const phoneInput = document.querySelectorAll('input[name="phone"]')
  const emailInput = document.querySelectorAll('input[name="email"]')
  const nameClient = document.querySelectorAll('input[name="nameClient"]')

  phoneInput.forEach((item) => {
    item.addEventListener('input', () => {
      item.value = item.value.replace(/\D/, '')
    })
  })

  emailInput.forEach((item) => {
    item.addEventListener('input', () => {
      let checkEmail = /\w+@\w+\.\w{2,20}/gi
      if (!checkEmail.test(emailInput.value)) {
        emailInput.style.border = 'red'
        emailInput.focus()
      }
    })
  })
  const message = {
    loading: 'Loading...',
    success: 'Thanks! Waiting for callback',
    failure: 'Oops something went wrong',
  }

  const postData = async (url, data) => {
    document.querySelector('.status').textContent = message.loading
    let res = await fetch(url, {
      method: 'POST',
      body: data,
    })
    return await res.text()
  }
  const clearInputs = () => {
    inputs.forEach((item) => {
      item.value = ''
    })
  }

  form.forEach((item) => {
    item.addEventListener('submit', (e) => {
      e.preventDefault()

      let statusMsg = document.createElement('div')
      statusMsg.classList.add('status')
      item.appendChild(statusMsg)

      const formData = new FormData(item)

      postData('http://localhost:4000/clients', FormData)
        .then((res) => {
          console.log(res), (statusMsg.textContent = message.success)
        })
        .catch(() => (statusMsg.textContent = message.failure))
        .finally(() => {
          clearInputs()
          setTimeout(() => {
            statusMsg.remove()
          }, 5000)
        })
    })
  })
}

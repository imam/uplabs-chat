import PerfectScrollbar from 'perfect-scrollbar'
require('perfect-scrollbar/css/perfect-scrollbar.css')

const chat_container = document.querySelector('.chat-body')
const chat_ps = new PerfectScrollbar(chat_container)
chat_container.scrollTop = chat_container.scrollHeight

const contacts_container = document.querySelector('.contacts')
const contacts_ps = new PerfectScrollbar(contacts_container)


console.log(chat_container)
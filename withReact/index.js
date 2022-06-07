const e = React.createElement

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showSideBar: false
    }
  }

  _handleClick = () => {
    if(this.state.showSideBar) {
      this.setState({showSideBar: false});
    } else {
      this.setState({showSideBar: true});
    }
  }

  _display = () => {
    if (this.state.showSideBar) {
      return (e(
        'div', {className: 'sidebarBody'},
        e('div', {className: 'sidebarEmpty', onClick: this._handleClick}),
        e(
          'div', { className: 'sidebarGround' },
          e(
            'div', { className: 'sidebarExitDiv' },
            e('img', {src: './images/icon-close-menu.svg', alt: 'Close Menu', onClick: this._handleClick})
          ),
          e(
            'div', { className: 'sidebarContent'},
            e(
              'div', { className: 'sidebarFeatures' },
              e('input', {id: 'sidebarFeaturesCheckbox', type: 'checkbox', hidden: true}),
              e('label', {htmlFor: 'sidebarFeaturesCheckbox'}, 'Features'),
              e('img', {src: './images/icon-arrow-down.svg', alt: 'Arrow Down'}),
              e(
                'ul', { className: 'sidebarFeaturesUl' },
                e('li', null,
                  e('img', {src: './images/icon-todo.svg', alt: 'todolist icon'}),
                  'Todo List'),
                e('li', null,
                  e('img', {src: './images/icon-calendar.svg', alt: 'calendar icon'}),
                  'Calendar'),
                e('li', null,
                  e('img', {src: './images/icon-reminders.svg', alt: 'reminders icon'}),
                  'Reminders'),
                e('li', null,
                  e('img', {src: './images/icon-planning.svg', alt: 'planning icon'}),
                  'Planning')
              )
            ),
            e(
              'div', { className: 'sidebarCompany' },
              e('input', { id: 'sidebarCompanyCheckbox', type: 'checkbox', hidden: true}),
              e('label', { htmlFor: 'sidebarCompanyCheckbox' }, 'Company'),
              e('img', {src: './images/icon-arrow-down.svg', alt: 'Arrow Down'}),
              e(
                'ul', { className: 'sidebarCompanyUl' },
                e('li', null, 'History'),
                e('li', null, 'Our Team'),
                e('li', null, 'Blog')
              )
            ),
            e(
              'div', {className: 'sidebarCareers'},
              e('button', {className: 'sidebarCareersButton'}, 'Careers')
            ),
            e(
              'div', {className: 'sidebarAbout'},
              e('button', {className: 'sidebarAboutButton'}, 'About')
            ),
            e(
              'div', {className: 'sidebarLogin'},
              e('button', {className: 'sidebarLoginButton'}, 'Login')
            ),
            e(
              'div', {className: 'sidebarRegister'},
              e('button', {className: 'sidebarRegisterButton'}, 'Register')
            )
          )
        )
      ))
    } else {
      return (e(
        'div', {onClick: this._handleClick},
        e('hr', null),
        e('hr', null),
        e('hr', null)
      ))
    }
  }

  render() {
    return (
      e('div', null, this._display())
    )
  }
}

const target = document.querySelector('.burgerBtn')
const root = ReactDOM.createRoot(target)
root.render(e(Index))
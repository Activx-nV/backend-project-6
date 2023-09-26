// @ts-check

export default {
  translation: {
    appName: 'Менеджер задач',
    flash: {
      session: {
        create: {
          success: 'Вы залогинены',
          error: 'Неправильный емейл или пароль',
        },
        delete: {
          success: 'Вы разлогинены',
        },
      },
      users: {
        create: {
          error: 'Не удалось зарегистрировать',
          success: 'Пользователь успешно зарегистрирован',
        },
        update: {
          error: 'Не удалось обновить пользователя',
          success: 'Пользователь успешно изменён',
        },
        delete: {
          error: 'Не удалось удалить пользователя',
          success: 'Пользователь успешно удалён',
          noAccess: 'У вас нет доступа для удаления этого пользователя',
        },
      },
      statuses: {
        create: {
          error: 'Не удалось создать статус',
          success: 'Статус успешно создан',
        },
        update: {
          error: 'Не удалось изменить статус',
          success: 'Статус успешно изменён',
        },
        delete: {
          error: 'Не удалось удалить статус',
          success: 'Статус успешно удалён',
        },
      },
      tasks: {
        update: {
          error: 'Не удалось изменить задачу',
          success: 'Задача успешно изменена',
        },
        create: {
          error: 'Не удалось создать задачу',
          success: 'Задача успешно создана',
        },
        delete: {
          error: 'Задачу может удалить только её автор',
          success: 'Задача успешно удалена',
        },
      },
      labels: {
        update: {
          error: 'Не удалось изменить метку',
          success: 'Метка успешно изменена',
        },
        create: {
          error: 'Не удалось создать метку',
          success: 'Метка успешно создана',
        },
        delete: {
          error: 'Не удалось удалить метку',
          success: 'Метка успешно удалена',
        },
      },
      authError: 'Доступ запрещён! Пожалуйста, авторизируйтесь.',
      accessError: 'Вы не можете редактировать или удалять другого пользователя',
    },
    layouts: {
      application: {
        users: 'Пользователи',
        signIn: 'Вход',
        signUp: 'Регистрация',
        signOut: 'Выход',
        edit: 'Изменение пользователя',
        statuses: 'Статусы',
        createStatus: 'Создание статуса',
        statusEdit: 'Изменение статуса',
        tasks: 'Задачи',
        createTask: 'Создание задачи',
        updateTask: 'Изменение задачи',
        labels: 'Метки',
        createLabel: 'Создание метки',
        labelEdit: 'Изменение метки',
      },
    },
    views: {
      session: {
        new: {
          signIn: 'Вход',
          submit: 'Войти',
        },
      },
      users: {
        id: 'ID',
        email: 'Email',
        firstName: 'Имя',
        lastName: 'Фамилия',
        password: 'Пароль',
        fullName: 'Полное имя',
        createdAt: 'Дата создания',
        new: {
          submit: 'Сохранить',
          signUp: 'Регистрация',
        },
        actions: 'Действия',
        update: 'Изменить',
        delete: 'Удалить',
      },
      welcome: {
        index: {
          hello: 'Привет от Хекслета!',
          description: 'Практические курсы по программированию',
          more: 'Узнать Больше',
        },
      },
      statuses: {
        id: 'ID',
        name: 'Наименование',
        createdAt: 'Дата создания',
        createStatus: 'Создать статус',
        create: 'Создать',
        delete: 'Удалить',
        update: 'Изменить',
      },
      tasks: {
        id: 'ID',
        name: 'Наименование',
        status: 'Статус',
        author: 'Автор',
        executor: 'Исполнитель',
        createdAt: 'Дата создания',
        create: 'Создать задачу',
        delete: 'Удалить',
        update: 'Изменить',
        actions: 'Действия',
        description: 'Описание',
        label: 'Метка',
        labels: 'Метки',
        show: 'Показать',
        onlyMyTasks: 'Только мои задачи',
        new: {
          create: 'Создать',
        },
      },
      labels: {
        id: 'ID',
        name: 'Наименование',
        createdAt: 'Дата создания',
        actions: 'Действия',
        create: 'Создать',
        update: 'Изменить',
        delete: 'Удалить',
        createLabel: 'Создать метку',
      },
    },
  },
};

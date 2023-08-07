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
          error: 'Не удалось зарегистрировать пользователя',
          success: 'Пользователь успешно зарегистрирован',
        },
        update: {
          error: 'Не удалось обновить пользователя',
          success: 'Пользователь успешно обновлен',
        },
        delete: {
          error: 'Не удалось удалить пользователя',
          success: 'Пользователь успешно удален',
          noAccess: 'У вас нет доступа для удаления этого пользователя',
        },
      },
      statuses: {
        create: {
          error: 'Не удалось создать статус',
          success: 'Статус успешно создан',
        },
        update: {
          error: 'Не удалось обновить статус',
          update: 'Статус успешно обновлен',
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
      authError: 'Доступ запрещён! Пожалуйста, авторизируйтесь.',
      accessError: 'У вас нет доступа к удалению или редактированию другого пользователя.',
    },
    layouts: {
      application: {
        users: 'Пользователи',
        signIn: 'Вход',
        signUp: 'Регистрация',
        signOut: 'Выход',
        edit: 'Редактирование',
        statuses: 'Статусы',
        createStatus: 'Создание статуса',
        statusEdit: 'Изменение статуса',
        tasks: 'Задачи',
        createTask: 'Создание задачи',
        updateTask: 'Изменение задачи',
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
        fullName: 'Полное имя',
        createdAt: 'Дата создания',
        new: {
          submit: 'Сохранить',
          signUp: 'Регистрация',
        },
        actions: 'Действия',
        update: 'Изменить',
        delete: 'Delete',
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
          create: 'Создать'
        }
      }
    },
  },
};

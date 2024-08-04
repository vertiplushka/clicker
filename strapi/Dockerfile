# Базовый образ с Node.js и предустановленным Yarn
FROM node:18

# Устанавливаем рабочую директорию для приложения
WORKDIR /app

# Копируем package.json и yarn.lock в рабочую директорию
COPY package.json yarn.lock ./

# Устанавливаем зависимости
RUN yarn install

# Копируем остальные файлы проекта в рабочую директорию
COPY . .

# Создаем сборку проекта
RUN yarn build

# Открываем порт, на котором будет работать Strapi
EXPOSE 1337

# Запуск Strapi
CMD ["yarn", "start"]

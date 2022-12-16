import React, { FunctionComponent, useState } from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const LeftItem = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'left',
    color: theme.palette.text.secondary,
}));

const DockerPage: FunctionComponent<{ initial?: boolean }> = ({ initial = false }) => {    

    const [modalIsOpen, setModalIsOpen] = useState(initial);
    const [modalSharpIsOpen, setModalSharpIsOpen] = useState(initial);
    const [modalDockerIsOpen, setModalDockerIsOpen] = useState(initial);

    const getModalWindow = () => {
        return <>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={() => setModalIsOpen(false)}
                ariaHideApp={false}
            >
                <Grid container spacing={2}>
                    <Grid item xs={10} />
                    <Grid item xs={2}>
                        <Button onClick={() => setModalIsOpen(false)} style={{ outline: 'none' }}>Close</Button>
                    </Grid>
                </Grid>
                <ModalBody>
                    <Item>
                        &lt;!DOCTYPE html&gt;
                        &lt;html&gt;
                        &lt;head&gt;

                        &lt;/head&gt;
                        &lt;body&gt;
                        &lt;h1&gt;Hello Docker&lt;/h1&gt;
                        &lt;p&gt;
                        This is our docker website.
                        &lt;/p&gt;
                        &lt;/body&gt;
                        &lt;/html&gt;
                    </Item>
                </ModalBody>
            </Modal>
        </>
    }

    const getDockerModalWindow = () => {
        return <>
            <Modal
                isOpen={modalDockerIsOpen}
                onRequestClose={() => setModalDockerIsOpen(false)}
                ariaHideApp={false}
            >
                <Grid container spacing={2}>
                    <Grid item xs={10} />
                    <Grid item xs={2}>
                        <Button onClick={() => setModalDockerIsOpen(false)} style={{ outline: 'none' }}>Close</Button>
                    </Grid>
                </Grid>
                <ModalBody>
                    <Item>
                        <Typography>
                            FROM httpd:alpine
                        </Typography>
                        <Typography>
                            COPY ./Html/ /usr/local/apache2/htdocs/
                        </Typography>
                    </Item>
                </ModalBody>
            </Modal>
        </>
    }

    const getSharpModalWindow = () => {
        return <>
            <Modal
                isOpen={modalSharpIsOpen}
                onRequestClose={() => setModalSharpIsOpen(false)}
                ariaHideApp={false}
                appElement={document.getElementById('#root')}
            >
                <Grid container spacing={2}>
                    <Grid item xs={10} />
                    <Grid item xs={2}>
                        <Button onClick={() => setModalSharpIsOpen(false)} style={{ outline: 'none' }}>Close</Button>
                    </Grid>
                </Grid>
                <ModalBody>
                    <LeftItem>
                        FROM mcr.microsoft.com/dotnet/aspnet:5.0-focal AS base
                        WORKDIR /app
                        EXPOSE 80

                        ENV ASPNETCORE_URLS=http://+:80

                        FROM mcr.microsoft.com/dotnet/sdk:5.0-focal AS build
                        WORKDIR /src
                        COPY ["HelloAspNetCore.csproj", "./"]
                        RUN dotnet restore "HelloAspNetCore.csproj"
                        COPY . .
                        RUN dotnet build "HelloAspNetCore.csproj" -c Release -o /app/build

                        FROM build AS publish
                        RUN dotnet publish "HelloAspNetCore.csproj" -c Release -o /app/publish

                        FROM base AS final
                        WORKDIR /app
                        COPY --from=publish /app/publish .
                        ENTRYPOINT ["dotnet", "HelloAspNetCore.dll"]

                    </LeftItem>
                </ModalBody>
            </Modal>
        </>
    }

    const getHtmlComponent = () => {
        return <>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography>Html</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <a href="https://www.youtube.com/watch?v=WcQ3-M4-jik" target="_blank">Полезное видео</a>
                        </Grid>
                        <Grid item xs={12}>
                            <text>
                                В VsCode создаем пустую папку Project. В ней создаем папку html и файл index.html (содержание не важно)
                            </text>
                            <Button onClick={() => setModalIsOpen(true)} style={{ outline: 'none' }}>Пример</Button>
                            <br />
                            <Typography>
                                Открываем папку Project, используя VsCode. Проверяем есть ли плагин Docker. Если нет, то ставим. После (в папке Project) создаем файл с названием dockerfile и пустым расширением.
                            </Typography>
                            <Button onClick={() => setModalDockerIsOpen(true)} style={{ outline: 'none' }}>Содержимое докерфайла</Button>
                            <Typography>
                                Первая строка показывает откуда мы берем пакеты для docker image. Все доступные пакеты можно посмотреть  <a href="https://hub.docker.com/" target="_blank">тут</a>
                            </Typography>
                            <Typography>
                                Пакет для html можно найти, вбив в поиск httpd. Из всех вариантов лучше выбрать последнюю версию.
                            </Typography>
                            <Typography>
                                Вторая строка показывает, что результат из /usr/local/apache2/htdocs/ нужно будет скопировать в папку /Html.
                            </Typography>
                            <Typography>
                                Далее, нажимаем вкладку Terminal, команда new Terminal. Снизу отобразиться Terminal, в него можно писать команды.
                                Для просмотра существующих image, используем команду: docker images.
                                На данном этапе у нас ничего нет.
                            </Typography>
                            <Typography>
                                Для сборки image, используем команду: docker build -t hello-docker:1.0.0 .
                                В данном случае, параметр '-t' используется для того, чтобы создать TAG. hello-docker - это название для нашего image, а 1.0.0 это его тэг.
                                Обратите внимание, что в конце команды стоит '.'. Если ее не написать, image не собирется.
                            </Typography>
                            <Typography>
                                Для старта используется команда: docker run --name first-container -p 8080:80 hello-docker:1.0.0
                            </Typography>
                            <Typography>
                                Параметр --name - не обязательный. Но так можно создавать контейнеры с разными именами, если это нужно.
                                Параметр -p 8080:80. Нужен для описания порта, через который контейнер будет взаимодействовать с машиной. 8080 - порт машины, 80 - порт для контейнера.
                                Примечание, лучше не использовать порт 8080, т.к. Jenkins стартует с этого порта.
                            </Typography>
                            <Typography>
                                Чтобы посмотреть на все существующие контейнеры, нужно ввести команду: docker ps -a.
                                Параметр -a, обозначает 'all'.
                            </Typography>
                            <Typography>
                                Чтобы остановить работу контейнера: docker stop ContainerId. ContainerId можно узнать после docker ps -a.
                            </Typography>
                            <Typography>
                                Чтобы удалить контейнер: docker rm ContainerId. ContainerId можно узнать после docker ps -a.
                            </Typography>
                            <Typography>
                                Чтобы удалить image: docker rmi ImageId. ImageId можно узнать после docker images.
                            </Typography>
                        </Grid>
                    </Grid>
                </AccordionDetails>
            </Accordion>
        </>
    }

    const getRabbitMQComponent = () => {
        return <>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography>RabbitMq</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <Typography>
                                На <a href="https://hub.docker.com/" target="_blank">сайте</a> с хабами докера вводим в поиске rabbitMq и открываем. Далее ищем Management Plugin.
                                Тут нас интересует комманда: docker run -d --hostname my-rabbit --name some-rabbit -p 8080:15672 rabbitmq:3-management
                            </Typography>
                            <Typography>
                                Использовав эту команду мы запустим рабочий и настроенный RabbitMq. Проверить это можно по localhost:8080
                            </Typography>
                            <Typography>
                                Логин: guest. Пароль: guest.
                            </Typography>
                        </Grid>
                    </Grid>
                </AccordionDetails>
            </Accordion>
        </>
    }

    const getDotNetCore = () => {
        return <>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography>.Net Core</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <a href="https://www.youtube.com/watch?v=Po9jQS7WBDQ&t" target="_blank">Полезное видео</a>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography>
                                В данном случае, мы создадим обычный web api. Для этого в командной строке вводим dotnet new webapi -o HelloAspNetCore --no-https.
                            </Typography>
                            <Typography>
                                Открываем его в VsCode.
                            </Typography>
                            <Typography>
                                Проверяем есть ли плагин Docker. Если нет, то ставим.
                            </Typography>
                            <Typography>
                                Для создание dockerfile. Открываем View, выбираем Command Palete, далее Docker: Add Docker Files to Workspace, после выбираем C#. OS, выбираем Linux. Порт, выбираем 80.
                            </Typography>
                            <Typography>
                                Пример полученного dockerfile.
                                <Button onClick={() => setModalSharpIsOpen(true)} style={{ outline: 'none' }}>Открыть</Button>
                            </Typography>
                        </Grid>
                    </Grid>
                </AccordionDetails>
            </Accordion>
        </>
    }

    return <>
            {getModalWindow()}
            {getDockerModalWindow()}
            {getSharpModalWindow()}

            <Grid id="myGrid" container spacing={2} style={{ height: '100%' }}>
                <Grid container item spacing={2}>
                    <Grid item xs={12}>
                        <Item>
                            <h1>Docker</h1>
                        </Item>
                    </Grid>
                </Grid>
                <Grid container item spacing={2}>
                    <Grid item xs={12}>
                        <Item>
                            Для начала нужно скачать докер.
                            <a href="https://docs.docker.com/get-docker/" target="_blank"> Ссылка</a>
                        </Item>
                    </Grid>
                </Grid>
                <Grid container item spacing={2} >
                    <Grid item xs={12}>
                        <h2>
                            Варианты использования:
                        </h2>
                    </Grid>
                    <Grid item xs={12}>
                        {getHtmlComponent()}
                        {getRabbitMQComponent()}
                        {getDotNetCore()}
                    </Grid>
                </Grid>
            </Grid>
    </>
}

export default DockerPage;
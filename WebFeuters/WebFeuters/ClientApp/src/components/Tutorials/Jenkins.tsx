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

const JenkinsPage: FunctionComponent<{ initial?: boolean }> = ({ initial = false }) => {

    const [modalIsOpen, setModalIsOpen] = useState(initial);
    const [fileIsOpen, setFileIsOpen] = useState(initial);    

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
                    <LeftItem>
                        <Typography>
                            Было: C:\tools\jdk\jdk-11.0.13.8-hotspot\bin
                        </Typography>
                        <Typography>
                            Стало: %JAVA_HOME%\bin
                        </Typography>                        
                    </LeftItem>
                </ModalBody>
            </Modal>
        </>
    }

    const getJenkinsFileWindow = () => {
        return <>
            <Modal
                isOpen={fileIsOpen}
                onRequestClose={() => setFileIsOpen(false)}
                ariaHideApp={false}                
            >
                <Grid container spacing={2}>
                    <Grid item xs={10} />
                    <Grid item xs={2}>
                        <Button onClick={() => setFileIsOpen(false)} style={{ outline: 'none' }}>Close</Button>
                    </Grid>
                </Grid>
                <ModalBody>
                    <LeftItem>
                        <Typography>
                            &lt;service&gt;
                            &lt;id&gt;jenkins&lt;/id&gt;
                            &lt;name&gt;Jenkins&lt;/name&gt;
                            &lt;description&gt;This service runs Jenkins automation server.&lt;/description&gt;
                            &lt;env name="JENKINS_HOME" value="%ProgramData%\Jenkins\.jenkins" /&gt;

                            &lt;executable&gt;%JAVA_HOME%\bin\java.exe&lt;/executable&gt;
                                &lt;arguments&gt;-Xrs -Xms3g -Xmx3g -Djava.awt.headless=true -Djava.net.preferIPv4Stack=true -Djava.io.tmpdir=C:\tools\Jenkins\tmp\ -Dhudson.lifecycle=hudson.lifecycle.WindowsServiceLifecycle -jar "C:\Tools\Jenkins\jenkins.war" --httpPort=8080 --webroot="%ProgramData%\Jenkins\war" --pluginroot="C:\tools\Jenkins\plugins"&lt;arguments&gt;

                                &lt;logmode&gt;rotate&lt;/logmode&gt;

                                &lt;onfailure action="restart" /&gt;

                                &lt;extensions&gt;
                                &lt;extension enabled="true" className="winsw.Plugins.
                            RunawayProcessKiller.RunawayProcessKillerExtension" id="killOnStartup"&gt;
                                        &lt;pidfile&gt;C:\tools\Jenkins\jenkins.pid&lt;/pidfile&gt;
                                        &lt;stopTimeout&gt;10000&lt;/stopTimeout&gt;
                                        &lt;stopParentFirst&gt;false&lt;/stopParentFirst&gt;
                                    &lt;/extension&gt;
                                &lt;/extensions&gt;

                            &lt;/service&gt;
                        </Typography>
                    </LeftItem>
                </ModalBody>
            </Modal>
        </>
    }

    const getInstallationComponent = () => {
        return <>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography>Installation</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <Typography>
                                Полезное видео <a href="https://www.youtube.com/watch?v=XuMrEDA8cAI&t" target="_blank"> Ссылка</a>
                            </Typography>                            
                        </Grid>
                        <Grid item xs={12}>
                            <Typography>
                                Перед установкой, нужно проверить, что установлен JDK, либо JDE. Для установки, я использовал Temurin JDK 11.
                                На данный момент, нужно использовать именно 11. С более новой версией может не работать.
                                Во время установки, выбираем Set JAVA_HOME variable и ставим значение: Will be installed on local hard drive.                                
                            </Typography>
                            <Typography>
                                После установки JDK, можно зайти в переменные среды и настроить их. Т.к. у нас будет создан JAVA_HOME, то можно его подставить в PATH.
                                <Button onClick={() => setModalIsOpen(true)} style={{ outline: 'none' }}>
                                    Пример
                                </Button>
                            </Typography>
                            <Typography>
                                После можно все проверить, для этого: открываем командную строку,
                                вводим java -version, это покажет версию java, команда echo %JAVA_HOME% покажет,
                                что, переменная JAVA_HOME, действительно установлена.
                            </Typography>
                            <Typography>
                                Теперь открываем Локальную Политику Безопасности (Local Security Policy).
                                Нам нужна вкладка Локальные Политики - Назначение Прав Пользователя. Local Policies - User Rights Assignment.
                                Выбираем "Вход в качестве службы" (Log on as a service). Сюда нужно добавить Админа.
                                Жмем добавить, если ОС на русском, то вводим Администратор, если на английском, то Administrator.
                                Если мы в рабочей сети, то нужно нажать еще проверку имени, это немного изменит имя пользователя, что мы ввели.
                            </Typography>
                            <Typography>
                                Теперь можно приступить к установке Jenkins. Во время нее, нужно отключить Start Service.
                            </Typography>
                            <Typography>
                                После устновки у нас будет xml файл, который можно настроить, можно этого не делать.
                                Вот <Button onClick={() => setFileIsOpen(true)} style={{ outline: 'none' }}>Пример</Button> настроенного файла.
                            </Typography>
                            <Typography>
                                Теперь включим Jenkins, он уже установлен как служба. После запуска, он сразу же остновится, так и должно быть.
                            </Typography>
                            <Typography>
                                При таких настройках будет ошибка из-за отсутвия папки tmp в папке с файлами Jenkins. Нужно ее создать.
                            </Typography>
                            <Typography>
                                Далее. Открываем файл "jenkins.err.log". В нем нам нужно найти "Please use the following password to proceed to installation:",
                                после этого будет пароль, который нужно скопировать.
                            </Typography>
                            <Typography>
                                Опять запускаем сервис. Ему нужно дать пару минут на настройку, около 2-5 минут.
                            </Typography>
                            <Typography>
                                Теперь нужно отрыть localhost:8080 и там нужен пароль, что мы вводили ранее. Далее жмет Install Pluggins.
                            </Typography>
                            <Typography>
                                Теперь осталось лишь придумать имя пользователю и пароль. И можно пользоваться Jenkins.
                            </Typography>
                        </Grid>
                    </Grid>
                </AccordionDetails>
            </Accordion>
        </>
    }

    const getSimpleComponent = () => {
        return <>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography>Самый простой способ использования</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <Typography>
                                тут ща че-то будет
                            </Typography>
                        </Grid>
                    </Grid>
                </AccordionDetails>
            </Accordion>
            </>
    }

    const getCommitComponent = () => {
        return <>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography>Сборка после коммита</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <Typography>
                                Сборка после коммита.
                            </Typography>
                        </Grid>
                    </Grid>
                </AccordionDetails>
            </Accordion>
        </>
    }

    return <>
        <React.Fragment>

            {getModalWindow()}
            {getJenkinsFileWindow()}

            <Grid container spacing={2}>
                <Grid container item spacing={2}>
                    <Grid item xs={12}>
                        <Item>
                            <h1>Jenkins</h1>
                        </Item>
                    </Grid>
                </Grid>
                <Grid container item spacing={2}>
                    <Grid item xs={12}>
                        <Item>
                            Ссылка для скачивания Jenkins.
                            <a href="https://www.jenkins.io/download/" target="_blank"> Ссылка</a>
                        </Item>
                    </Grid>
                </Grid>
            </Grid>
            <br />
            {getInstallationComponent()}
            {getSimpleComponent()}
            {getCommitComponent()}
        </React.Fragment>
    </>
}

export default JenkinsPage;
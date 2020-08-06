import React from 'react';

// Components
import PageLayout from '../components/layout/PageLayout';
import Tasks from '../components/tasksView/Tasks';
import Timer from '../components/timerView/Timer';

const MyJournal = () => {
    return <PageLayout left={<Tasks />} right={<Tasks />}></PageLayout>;
};

export default MyJournal;

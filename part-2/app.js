const app = () => {
    return (
        <div>
            <tweets
                name='zoro'
                username='threeswords'
                date={new Date().toDateString()}
                message='onigiri'
            />
            <tweets
                name='luffy'
                username='gumgum'
                date={new Date().toDateString()}
                message='red roc'
            />
            <tweets
                name='ace'
                username='firefire'
                date={new Date().toDateString()}
                message='flameeeeeeeeee'
            />
        </div>
    );
}
import { Input, PasswordInput } from '../components/input';

export default function DeskPage() {
    return (
        <div className="page">
            <div className="card-box" style={{ marginBottom: '10px' }}>
                <p className='title'>Task 1</p>
                <form action="" className="input-container">
                    <Input placeHolder={'Dummy 1'} />
                    <Input placeHolder={'Dummy 2'} />
                    <Input placeHolder={'Dummy 3'} />
                    <div className='dual-input'>
                        <Input placeHolder={'Dummy 4'} />
                        <Input placeHolder={'Dummy 4'} />
                    </div>
                    <div className='dual-input'>
                        <div className='dual-input'>
                            <Input placeHolder={'Dummy 5'} />
                            <Input placeHolder={'Dummy 5'} />
                        </div>
                        <Input placeHolder={'Dummy 5'} />
                    </div>
                    <button type="submit" className='basic-button'>Submit</button>
                </form>
            </div>
            <div className="card-box" style={{ marginBottom: '30px' }}>
                <p className='title'>Task 2</p>
                <form action="" className="input-container">
                    <Input placeHolder={'Dummy 1'} />
                    <Input placeHolder={'Dummy 2'} />
                    <Input placeHolder={'Dummy 3'} />
                    <div className='dual-input'>
                        <Input placeHolder={'Dummy 4'} />
                        <Input placeHolder={'Dummy 4'} />
                    </div>
                    <div className='dual-input'>
                        <div className='dual-input'>
                            <Input placeHolder={'Dummy 5'} />
                            <Input placeHolder={'Dummy 5'} />
                        </div>
                        <div className='dual-input'>
                            <Input placeHolder={'Dummy 5'} />
                            <Input placeHolder={'Dummy 5'} />
                        </div>
                    </div>
                    <button type="submit" className='basic-button'>Submit</button>
                </form>
            </div>
        </div>
    )
}
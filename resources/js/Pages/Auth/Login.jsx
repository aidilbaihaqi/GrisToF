import Checkbox from '@/Components/Checkbox';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import TextInput from '@/Components/TextInput';
import { Button } from '@/resources/js/components/ui/button';
import { Card, CardContent, CardHeader } from '@/resources/js/components/ui/card';
import GuestLayout from '@/Layouts/GuestLayout';
import { Link, useForm } from '@inertiajs/react';
import { useEffect } from 'react';

export default function Login({ status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: false,
    });

    useEffect(() => {
        return () => {
            reset('password');
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();

        post(route('login'));
    };

    return (
        <GuestLayout title='Login'>
            <div className="flex flex-col justify-center flex-1 min-h-full px-6 py-12 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <Card>
                        <CardHeader>
                            <Link href="/" className="text-4xl font-black leading-relaxed tracking-tighter">
                                GrisToF<span className="text-red-500">.</span>
                            </Link>
                            <h2 className="text-md font-medium leading-relaxed tracking-tight text-left text-muted-foreground">
                                To-Do List, Notes, and Financial Management App
                            </h2>
                        </CardHeader>
                        <CardContent>

                            <div className="mt-6 sm:mx-auto sm:w-full sm:max-w-sm">
                                {status && <div className="mb-4 text-sm font-medium text-green-600">{status}</div>}
                                <form className="space-y-6" onSubmit={submit}>
                                    {/* form */}
                                    <div>
                                        <InputLabel htmlfor='email' value='Email' />
                                        <TextInput 
                                            id='email'
                                            name='email'
                                            type='email'
                                            value={data.email}
                                            className='block w-full mt-1'
                                            isFocused={true}
                                            onChange={(e) => setData('email', e.target.value)}
                                            onErrors={errors.email && <InputError className='mt-1' message={errors.email} />}
                                        />
                                    </div>

                                    <div>
                                        <div className='flex items-center justify-between'>
                                            <InputLabel htmlfor='password' value='Password' />
                                        </div>
                                        <div>
                                            <TextInput 
                                                id='password'
                                                name='password'
                                                type='password'
                                                value={data.password}
                                                className='block w-full mt-1'
                                                onChange={(e) => setData('password', e.target.value)}
                                                onErrors={errors.password && <InputError className='mt-1' message={errors.password} />}
                                            />
                                        </div>
                                    </div>

                                    <div className='block mt-4'>
                                        <label className='flex items-center'>
                                            <Checkbox
                                                name='remember'
                                                checked={data.remember}
                                                onChange={(e) => setData('remember', e.target.checked)}
                                            />

                                            <span className='text-sm ms-2 text-muted-foreground'>Remember me</span>
                                        </label>
                                    </div>

                                    <div>
                                        <Button type='submit' variant='red' className='w-full' disabled={processing}>
                                            Sign in
                                        </Button>
                                    </div>
                                </form>

                                {/* <p className="mt-10 text-sm text-center text-muted-foreground">
                                    Not a member?{' '}
                                    <Link
                                        href={route('register')}
                                        className="font-semibold leading-6 text-red-500 hover:text-red-600"
                                    >
                                        Register
                                    </Link>
                                </p> */}
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </GuestLayout>
    );
}

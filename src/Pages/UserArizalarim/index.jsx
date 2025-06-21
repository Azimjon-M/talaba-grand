import { Link } from 'react-router-dom';

const UserArizlarim = () => {
    const applications = [
        {
            id: 1,
            date: '2025-06-09',
            status: 'Accepted',
            isGranted: false,
        },
        {
            id: 2,
            date: '2025-06-05',
            status: 'Ignored',
            isGranted: true,
        },
        {
            id: 3,
            date: '2025-06-03',
            status: 'Ignored',
            isGranted: false,
        },
    ];

    return (
        <div className="min-h-screen flex flex-col items-center bg-gray-100 dark:bg-gray-900 p-4">
            <h1 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
                Arizalarim
            </h1>
            <div className="w-full max-w-3xl bg-white dark:bg-gray-800 shadow-lg rounded-lg">
                {applications.map((application) => (
                    <div
                        key={application.id}
                        className="flex items-center justify-between p-4 border-b dark:border-gray-700 last:border-none"
                    >
                        <div>
                            <p className="text-gray-800 dark:text-gray-300">
                                <span className="font-medium">
                                    Berilgan Sana:
                                </span>{' '}
                                {application.date}
                            </p>
                            <p
                                className={`font-medium ${
                                    application.status === 'Accepted'
                                        ? 'text-green-600'
                                        : 'text-red-600'
                                }`}
                            >
                                {application.status === 'Accepted'
                                    ? 'Qabul qilindi'
                                    : 'Rad etildi'}
                            </p>
                        </div>
                        <div>
                            {application.status === 'Ignored' &&
                                application.isGranted && (
                                    <Link
                                        to={{
                                            pathname: '/user-cabinet',
                                        }}
                                        state={{ isApelyatsya: true }}
                                        className="text-blue-500 hover:underline"
                                    >
                                        Apelyatsiya berish
                                    </Link>
                                )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default UserArizlarim;

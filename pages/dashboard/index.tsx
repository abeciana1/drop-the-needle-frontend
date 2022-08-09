import { useEffect } from 'react'
import CustomHead from '../../components/core/CustomHead'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { withRouter } from 'next/router'

// {
//     "router": {
//         "pathname": "/dashboard",
//         "route": "/dashboard",
//         "query": {},
//         "asPath": "/dashboard",
//         "components": {
//             "/dashboard": {
//                 "initial": true,
//                 "props": {
//                     "pageProps": {}
//                 },
//                 "__N_RSC": false
//             },
//             "/_app": {
//                 "styleSheets": []
//             }
//         },
//         "isFallback": false,
//         "basePath": "",
//         "isReady": true,
//         "isPreview": false,
//         "isLocaleDomain": false,
//         "events": {}
//     },
//     "user": {
//         "id": 5,
//         "name": "Alex",
//         "email": "alex@test.com",
//         "hosting": [
//             {
//                 "id": 4,
//                 "title": "fake power hour 1",
//                 "description": "Lo-fi distillery authentic truffaut vegan 90's.",
//                 "cover_image": "https://www.thebeatles.com/sites/default/files/styles/responsive_thumbnail_mobile/public/2021-06/Magical-Mystery-Tour.jpg?itok=8midCi2f",
//                 "date_time": "2022-08-25",
//                 "created_at": "2022-07-18T04:13:44.603Z",
//                 "updated_at": "2022-07-18T04:13:44.603Z"
//             }
//         ],
//         "participating": [
//             {
//                 "id": 4,
//                 "title": "fake power hour 1",
//                 "description": "Lo-fi distillery authentic truffaut vegan 90's.",
//                 "cover_image": "https://www.thebeatles.com/sites/default/files/styles/responsive_thumbnail_mobile/public/2021-06/Magical-Mystery-Tour.jpg?itok=8midCi2f",
//                 "date_time": "2022-08-25",
//                 "created_at": "2022-07-18T04:13:44.603Z",
//                 "updated_at": "2022-07-18T04:13:44.603Z"
//             }
//         ],
//         "songs": [
//             {
//                 "id": 1,
//                 "title": "Here Comes The Sun",
//                 "artist": "The Band",
//                 "album": "(What's the Story) Morning Glory?",
//                 "youtube_link": "https://www.youtube.com/watch?v=W8r-tXRLazs",
//                 "start_time": "0:10",
//                 "end_time": "0:15",
//                 "power_hour_id": 4,
//                 "order_number": 1,
//                 "user_id": 5
//             }
//         ],
//         "power_hours": [
//             {
//                 "id": 4,
//                 "title": "fake power hour 1",
//                 "description": "Lo-fi distillery authentic truffaut vegan 90's.",
//                 "cover_image": "https://www.thebeatles.com/sites/default/files/styles/responsive_thumbnail_mobile/public/2021-06/Magical-Mystery-Tour.jpg?itok=8midCi2f",
//                 "date_time": "2022-08-25",
//                 "hosts": [
//                     {
//                         "id": 5,
//                         "name": "Alex",
//                         "email": "alex@test.com",
//                         "hosting": [
//                             {
//                                 "id": 4,
//                                 "title": "fake power hour 1",
//                                 "description": "Lo-fi distillery authentic truffaut vegan 90's.",
//                                 "cover_image": "https://www.thebeatles.com/sites/default/files/styles/responsive_thumbnail_mobile/public/2021-06/Magical-Mystery-Tour.jpg?itok=8midCi2f",
//                                 "date_time": "2022-08-25",
//                                 "created_at": "2022-07-18T04:13:44.603Z",
//                                 "updated_at": "2022-07-18T04:13:44.603Z"
//                             }
//                         ],
//                         "participating": [
//                             {
//                                 "id": 4,
//                                 "title": "fake power hour 1",
//                                 "description": "Lo-fi distillery authentic truffaut vegan 90's.",
//                                 "cover_image": "https://www.thebeatles.com/sites/default/files/styles/responsive_thumbnail_mobile/public/2021-06/Magical-Mystery-Tour.jpg?itok=8midCi2f",
//                                 "date_time": "2022-08-25",
//                                 "created_at": "2022-07-18T04:13:44.603Z",
//                                 "updated_at": "2022-07-18T04:13:44.603Z"
//                             }
//                         ]
//                     }
//                 ],
//                 "participants": [
//                     {
//                         "id": 5,
//                         "name": "Alex",
//                         "email": "alex@test.com",
//                         "hosting": [
//                             {
//                                 "id": 4,
//                                 "title": "fake power hour 1",
//                                 "description": "Lo-fi distillery authentic truffaut vegan 90's.",
//                                 "cover_image": "https://www.thebeatles.com/sites/default/files/styles/responsive_thumbnail_mobile/public/2021-06/Magical-Mystery-Tour.jpg?itok=8midCi2f",
//                                 "date_time": "2022-08-25",
//                                 "created_at": "2022-07-18T04:13:44.603Z",
//                                 "updated_at": "2022-07-18T04:13:44.603Z"
//                             }
//                         ],
//                         "participating": [
//                             {
//                                 "id": 4,
//                                 "title": "fake power hour 1",
//                                 "description": "Lo-fi distillery authentic truffaut vegan 90's.",
//                                 "cover_image": "https://www.thebeatles.com/sites/default/files/styles/responsive_thumbnail_mobile/public/2021-06/Magical-Mystery-Tour.jpg?itok=8midCi2f",
//                                 "date_time": "2022-08-25",
//                                 "created_at": "2022-07-18T04:13:44.603Z",
//                                 "updated_at": "2022-07-18T04:13:44.603Z"
//                             }
//                         ]
//                     },
//                     {
//                         "id": 6,
//                         "name": "Wilda Wolf",
//                         "email": "roland_hoeger@ferry-gleichner.com",
//                         "hosting": [
//                             {
//                                 "id": 5,
//                                 "title": "fake power hour 2",
//                                 "description": "Poutine stumptown sustainable xoxo mustache tousled swag ugh bespoke.",
//                                 "cover_image": "https://upload.wikimedia.org/wikipedia/en/4/42/Beatles_-_Abbey_Road.jpg",
//                                 "date_time": "2022-08-18",
//                                 "created_at": "2022-07-18T04:13:44.608Z",
//                                 "updated_at": "2022-07-18T04:13:44.608Z"
//                             }
//                         ],
//                         "participating": [
//                             {
//                                 "id": 4,
//                                 "title": "fake power hour 1",
//                                 "description": "Lo-fi distillery authentic truffaut vegan 90's.",
//                                 "cover_image": "https://www.thebeatles.com/sites/default/files/styles/responsive_thumbnail_mobile/public/2021-06/Magical-Mystery-Tour.jpg?itok=8midCi2f",
//                                 "date_time": "2022-08-25",
//                                 "created_at": "2022-07-18T04:13:44.603Z",
//                                 "updated_at": "2022-07-18T04:13:44.603Z"
//                             }
//                         ]
//                     },
//                     {
//                         "id": 7,
//                         "name": "Hien Koss",
//                         "email": "von@conn.org",
//                         "hosting": [
//                             {
//                                 "id": 6,
//                                 "title": "fake power hour 3",
//                                 "description": "You probably haven't heard of them bespoke meditation pug sustainable chartreuse.",
//                                 "cover_image": "https://www.cleveland.com/resizer/QXH4tEN4nFdZgqSSPz0nPIyuk7k=/1280x0/smart/cloudfront-us-east-1.images.arcpublishing.com/advancelocal/2CJOQE4IK5AY5OD33OHU5WOIIU.jpg",
//                                 "date_time": "2022-08-19",
//                                 "created_at": "2022-07-18T04:13:44.615Z",
//                                 "updated_at": "2022-07-18T04:13:44.615Z"
//                             }
//                         ],
//                         "participating": [
//                             {
//                                 "id": 4,
//                                 "title": "fake power hour 1",
//                                 "description": "Lo-fi distillery authentic truffaut vegan 90's.",
//                                 "cover_image": "https://www.thebeatles.com/sites/default/files/styles/responsive_thumbnail_mobile/public/2021-06/Magical-Mystery-Tour.jpg?itok=8midCi2f",
//                                 "date_time": "2022-08-25",
//                                 "created_at": "2022-07-18T04:13:44.603Z",
//                                 "updated_at": "2022-07-18T04:13:44.603Z"
//                             }
//                         ]
//                     },
//                     {
//                         "id": 8,
//                         "name": "Celestina Zieme DVM",
//                         "email": "norine@mante-labadie.org",
//                         "hosting": [],
//                         "participating": [
//                             {
//                                 "id": 4,
//                                 "title": "fake power hour 1",
//                                 "description": "Lo-fi distillery authentic truffaut vegan 90's.",
//                                 "cover_image": "https://www.thebeatles.com/sites/default/files/styles/responsive_thumbnail_mobile/public/2021-06/Magical-Mystery-Tour.jpg?itok=8midCi2f",
//                                 "date_time": "2022-08-25",
//                                 "created_at": "2022-07-18T04:13:44.603Z",
//                                 "updated_at": "2022-07-18T04:13:44.603Z"
//                             }
//                         ]
//                     }
//                 ]
//             }
//         ]
//     }
// }

const Dashboard = (props: any) => {
    const { user } = props

    console.log(user);

    return (
        <>
            <CustomHead
                title="Dashboard | Drop The Needle"
                description=""
            />
            <div className="text-left font-medium">
                <h2>Hi { user?.name }</h2>
            </div>
            <section>
                <h3 className="py-4">Hosted power hours</h3>
                <div></div>
                <h3 className="py-4">Participating power hours</h3>
                <div></div>
            </section>
        </>
    )
}

const mapStateToProps = (state: any) => (
    {
        user: state.user.currentUser
    }
)

export default compose(withRouter, connect(mapStateToProps, null))(Dashboard)
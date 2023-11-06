import axios from 'axios';
export default function handler(req, res) {
    if (req.method === 'POST') {
    
       
        // const headers = {
        //     'Content-Type': 'application/json',
        //     Authorization: `Bearer ${req.body.JwtToken}`,
        // };

        axios.post(`${process.env.API_URL}home/SendEnq`, { token: process.env.MYKEY, name: req.body.name, mobile: req.body.mobile, email: req.body.email, service: req.body.service }).then((response) => {
            console.log(response.data)
            res.status(200).json({Data: response.data });
            
        });

    } else {
        res.status(200).json({ ReqS: false });
    }
}
import Layout from "../components/Layout";
import {Route, Routes, Navigate, useNavigate} from "react-router-dom";

function Hello() {

    return (
        <Layout>
            <Routes>
                <Route index element={<h1>Hello</h1>}></Route>
                <Route path="world" element={<h1>World</h1>}></Route>
                <Route path="computer" element={<p>This is the hello/computer route</p>}></Route>
                <Route path="*" element={<Navigate to="/404" replace />}></Route>
            </Routes>
        </Layout>
    );
}

export default Hello;
import { Suspense } from "react";
import { useState } from "react";
import { lazy } from "react";
import Loading from "./Loading";

const MarkdownPreview = lazy(()=>delayForDemo(import('./MarkdownPreview.jsx')))
function delayForDemo(promise) {
 return new Promise(resolve => {
  setTimeout(resolve, 2000);
 }).then(() => promise);
}


export default function MarkdownEditor(){
    const [showPreview,setShowPreview] = useState(false)
    return(
        <>
        <label>
            <input type="checkbox" checked={showPreview} onChange={e=>setShowPreview(e.target.checked)} /> Show preview

        </label>
        <hr />
        {showPreview && (
            <Suspense fallback = {<Loading />}>
                <h2>Preview</h2>
                <MarkdownPreview />
            </Suspense>
        )}
        </>
    )
}
import { Application, Router } from "https://deno.land/x/oak@v11.1.0/mod.ts";

const app = new Application();
const router=new Router();

router.get("/:path", (ctx) => {
    ctx.response.headers.append("Content-Type", "text/html");
    if(ctx.params.path=="gmail"){
        ctx.response.body = `GooglePass`;
    }
});


router.get("/:path1/:path2", (ctx) => {
    ctx.response.headers.append("Content-Type", "text/html");
    ctx.response.body = `${ctx.params.path1} ${ctx.params.path2}`;
});




app.use(router.routes());
app.use(router.allowedMethods());

await app.listen({ port: 8000 });

<template>
    <div class="background">
        <div class="login-box">
            <img src="https://play-lh.googleusercontent.com/kT0QadlhpxeLqBC9jwbd3Ii19vW3v--lG5hlAlKJCMOQoCUX85zOurq2P82ynehCk90" alt="">
            <h2>Login</h2>
            <form>
                <!-- <div class="form-group">
                    <label for="email">Email Adress </label>
                    <img width="24" height="24" src="https://img.icons8.com/material-outlined/24/new-post.png" alt="email"/>
                    <input type="email" name="email" id="" placeholder="email">
                </div>

                <div class="form-group">
                    <label for="password">Password </label>
                    <img width="24" height="24" src="https://img.icons8.com/material-outlined/24/password.png" alt="password"/>
                    <input type="password" name="password" id="" placeholder="password">
                </div>    -->

                <FormInput
                    img="https://img.icons8.com/material-outlined/24/new-post.png"
                    size="24"
                    type="email"
                />
                <FormInput
                    img="https://img.icons8.com/material-outlined/24/password.png"
                    size="24"
                    type="password"
                />
            </form>
        </div>
    </div>
</template>
<script>
import FormInput from '@/components/FormInput.vue';
export default {
    components: {
        FormInput
    }
}
</script>
<style lang="scss">
    .background {
        background-color: #999;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 0; padding: 0;
        width: 100vw; height: 100vh;
    }

    .login-box {
        background-color: #fff;
        width: 450px; height: 300px;
        border-radius: 8px;
        box-shadow: 0 0 8px -2px black;
        padding: 4px;
        text-align: center;

        h2 {
            text-align: center;
            font-weight: 500;
        }
        & > img {
            margin: 0 auto;
            width: 120px;
        }

        .form-group {
            margin: 10px 20%;
            text-align: center;
            position: relative;
            padding: 0;

            img {
                position: absolute; 
                top: 50%; left: 4px;
                transform: translateY(-50%);
                filter: invert(0.5);
            }
            input {
                width: 100%;
                padding: 2px 8px;
                padding-left: 36px;
            }
            &:has(input:focus) {
                img {
                    filter: invert(0);
                }
                input {
                    border: none;
                }
            }

        }
    }

</style>
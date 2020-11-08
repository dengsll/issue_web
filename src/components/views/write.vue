<template>
    <div class="edit_container">
        <el-button type="danger" @click="publicArticle" size="medium" style="float:left" plain>发布</el-button>
        <quill-editor 
            v-model="content" 
            ref="myQuillEditor" 
            :options="editorOption" 
            @blur="onEditorBlur($event)" @focus="onEditorFocus($event)"
            @change="onEditorChange($event)" style="height:500px;width:1000px">
        </quill-editor>
    </div>
</template>
<script>
import { quillEditor } from "vue-quill-editor"; //调用编辑器
import {Particle} from "@/api/public"
import 'quill/dist/quill.core.css';
import 'quill/dist/quill.snow.css';
import 'quill/dist/quill.bubble.css';
export default {
    components: {
        quillEditor
    },
    data() {
        return {
            content: `欢迎使用`,
            editorOption: {},
            content:""
        }
    },
    methods: {
        onEditorReady(editor) { // 准备编辑器
 
        },
        onEditorBlur(){}, // 失去焦点事件
        onEditorFocus(){}, // 获得焦点事件
        onEditorChange(){}, // 内容改变事件-
        //点击发布触发
        publicArticle(){
            let article = {};
            article.content = this.content;
            article.classifyId=1;
            article.articleId = 3;
            article.title = "测试哦";
            article.userId = 1;
            article.createTime = new Date();
            article.updateTime = new Date();
            article.viewCount = 2;
            article.favorCount = 2;
            article.isValid = 1;
            Particle(article).then(res => {
                let result = this.res;
            })

        }
    },
    computed: {
        editor() {
            return this.$refs.myQuillEditor.quill;
        },
    }
}
</script>
(ns script
  (:require [clojure.edn :as edn]
            [markdown.core :as md]
            [clojure.pprint :refer [pprint]]
            [clojure.java.io :as io]
            [clojure.data.json :as json]))

(def base-path "./../courses/")

(defn parse-chapter [chapter path]
  (let [chapter-path (str path "/" chapter)
        info (try (slurp (str chapter-path "/info.md")) (catch Exception _ ""))
        story (try (slurp (str chapter-path "/story.md")) (catch Exception _ ""))
        html-base (try (slurp (str chapter-path "/html-base.html")) (catch Exception _ ""))
        html (try (slurp (str chapter-path "/html.html")) (catch Exception _ ""))
        css-base (try (slurp (str chapter-path "/css-base.css")) (catch Exception _ ""))
        css (try (slurp (str chapter-path "/css.css")) (catch Exception _ ""))]
    {:info (md/md-to-html-string info)
     :story (md/md-to-html-string story)
     :html_base html-base
     :html html
     :css_base css-base
     :css css}))

(defn parse-chapters [chapter-list path]
  (map #(parse-chapter % path) (sort chapter-list)))

(defn write-file [json] (spit "courses.js" json))

(defn add-js-const-def [s]
  (str "const courses = " s))

(let [courses (remove #(= ".DS_Store" %)
                      (seq (.list (io/file base-path))))]
  (->
   (map (fn [c]
          (let [path (str base-path c)
                chapters (remove #(= ".DS_Store" %)
                                 (seq (.list (io/file path))))]
            (pprint path)
            (pprint chapters)
            {:course (get (edn/read-string (slurp (str path "/" (first chapters)))) :name)
             :chapters (parse-chapters (rest chapters) path)})) courses)
   json/write-str
   add-js-const-def
   write-file))